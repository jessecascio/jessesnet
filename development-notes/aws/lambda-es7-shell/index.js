
import Config from './src/Config';
import Controller from './src/Controller';

exports.handler = async (event, context, callback) => {
  try {
    // ENV conditional load
    const config = Config.load();

    const controller = new Controller(config);
    const response = await controller.work(event.params);

    return callback(null, { data: response });
  } catch (e) {
    console.log(`Application ERROR: ${e}`);
    return context.fail('Application Error');
  }
};
