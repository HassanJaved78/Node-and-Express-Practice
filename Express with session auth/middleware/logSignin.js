export function logSignin(req, res, next) {

    console.log('sign in attempted with username: ', req.body.username);

    next()

}