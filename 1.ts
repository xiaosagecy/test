  async function refreshRemainingAmountByNow() {
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    let refreshFinishTime = null;
    try {
      // 更新立即刷新标志
      await this.bosConfigEnvModel.findOneAndUpdate(
        {
          type:"pj-common-schedule-pns",
          'value.CREDIT_CARD_CONFIG.IS_FETCH_LATEST_DATA': { $ne: true }
        },
        {
          $set: {
           'value.CREDIT_CARD_CONFIG.IS_FETCH_LATEST_DATA': true
          }
        }
      )

      const timestamp = Date.now();
      while (true) {
        // 检查是否超时 1 分钟，超出抛异常停止循环
        if (Date.now() - timestamp > 60000) {
          throw new Error('Refresh timeout, not completed for more than 1 minute');
        }

        const result = await this.bosConfigEnvModel.findOne(
          {
            type:"pj-common-schedule-pns",
          },
          {
            _id: 0,
            'value.CREDIT_CARD_CONFIG.REFRESH_FINISH_TIME': 1,
          }
        ).lean().exec();

        const REFRESH_FINISH_TIME = result['value']?.CREDIT_CARD_CONFIG?.REFRESH_FINISH_TIME || 0;
        if (timestamp < REFRESH_FINISH_TIME) {
          refreshFinishTime = moment(REFRESH_FINISH_TIME).format('YYYY-MM-DD HH:mm:ss');
          break;
        }
        await delay(500);
      }
      return { refreshFinishTime };
    } catch (error) {
      console.log(`CreditCardService[refreshRemainingAmountByNow] Error >>>> ${error.message}`);
      throw new Error(error.message || 'refresh error');
    }
  }