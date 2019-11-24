import jwt from 'jsonwebtoken';

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    // console.log(token);
    // eslint-disable-next-line consistent-return
    jwt.verify(token, 'xyzabc129dsei3likjhseskjdssa;lkjda', (error, decoded) => {
      if (error) {
        return res.json({
          status: 'error',
          error,
        });
      }
      req.decoded = decoded;
      console.log(decoded);
      next();
    });
  } catch (error) {
    res.status(401).json({
      status: 'error',
      data: {
        error,
        message: 'invalid request',
      },
    });
  }
};
