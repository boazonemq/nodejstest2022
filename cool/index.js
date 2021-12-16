const c = require('constant-case');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = 'boaz ron';
    const result = c.constantCase("Your name in uppercase is "+name);
    context.log(result);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: result
    };
}