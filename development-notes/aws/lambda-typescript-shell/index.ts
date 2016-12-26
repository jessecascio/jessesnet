
import Controller from './src/Controller';

exports.handler = async (event, context, callback) => {
  try {
    
    const controller = new Controller();
    const response = await controller.work(event.params.path, event.params.querystring);

    return callback(null, { data: response });
  } catch (e) {
    console.log(`Application ERROR: ${e}`);
    return context.fail('Application Error');
  }
};
