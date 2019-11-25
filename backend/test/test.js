// eslint-disable-next-line import/no-extraneous-dependencies
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../service';

process.env.NODE_ENV = 'test';

chai.use(chaiHttp);
chai.should();

describe('Users', () => {
  describe('POST /api/v1/auth', () => {
    it('should login a user', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signin')
        .send({
          email: 'superuser@teamwork.com',
          password: 'password123%',
        })
        .end((er, res) => {
          res.should.have.status(200);
          res.body.should.have.property('status').eql('success');
          res.body.data.should.have.property('token');
          res.body.data.should.have.property('userId').eql(1);
          done();
        });
    });
    it('should create an user', (done) => {
      chai.request(app)
        .post('/api/v1/auth/create-user')
        .send({
          firstname: '1Abigail2',
          lastname: '1Akinniyi2',
          email: '1abiniyi21@email.com',
          password: 'password123%',
          gender: 'female',
          jobrole: 'Managing Director',
          address: 'Oyo Road, oyo state',
          staffnumber: 'sn0000001',
          employmentdate: '12-12-2012',
          administrator: false,
        })
        .end((er, res) => {
          res.should.have.status(401);
          res.body.should.have.property('status').eql('error');
          res.body.should.have.property('error');
          done();
        });
    });
  });
  describe('GET /api/v1/auth', () => {
    it('should get all users', (done) => {
      chai.request(app)
        .get('/api/v1/auth/users')
        .end((er, res) => {
          res.should.have.status(401);
          res.body.should.have.property('status').eql('error');
          done();
        });
    });
    it('should get one user', (done) => {
      const id = 1;
      chai.request(app)
        .get(`/api/v1/auth/users/${id}`)
        .end((er, res) => {
          res.should.have.status(401);
          res.body.should.have.property('status').eql('error');
          done();
        });
    });
  });
});

describe('Articles', () => {
  describe('GET /api/v1/articles', () => {
    it('should get all articles', (done) => {
      chai.request(app)
        .get('/api/v1/articles')
        .end((er, res) => {
          res.should.have.status(401);
          res.body.should.have.property('status').eql('error');
          res.body.should.have.property('error');
          // res.body.data[0].should.have.property('feed');
          // res.body.data[0].should.have.property('title');
          // res.body.data[0].should.have.property('inappropflag');
          done();
        });
    });
    it('should get one article', (done) => {
      const id = 5;
      chai.request(app)
        .get(`/api/v1/articles/${id}`)
        .end((er, res) => {
          res.should.have.status(401);
          res.body.should.have.property('status').eql('error');
          // res.body.should.have.property('data');
          // res.body.data.should.have.property('feed');
          // res.body.data.should.have.property('title');
          // res.body.data[0].should.have.property('inappropflag');
          done();
        });
    });
  });
  describe('PUT /api/v1/articles', () => {
    it('should update an article', (done) => {
      const id = 2;
      chai.request(app)
        .patch(`/api/v1/articles/${id}`)
        .send({
          title: 'changed title',
          feed: 'fourth article is here',
          tagid: 1,
          inappropflag: false,
        })
        .end((er, res) => {
          res.should.have.status(401);
          res.body.should.have.property('status').eql('error');
          // res.body.data.should.have.property('message').eql('feed successfully updated');
          done();
        });
    });
  });
  describe('POST /api/v1/articles', () => {
    it('should create an article', (done) => {
      chai.request(app)
        .post('/api/v1/articles/')
        .send({
          title: 'a brand new title',
          feed: 'another beautiful article is here',
          createdon: '2019-10-31T23:00:00.000Z',
          authorid: 1,
          tagid: 1,
          inappropflag: false,
        })
        .end((er, res) => {
          res.should.have.status(401);
          res.body.should.have.property('status').eql('error');
          // res.body.data.should.have.property('message').eql('feed successfully posted');
          done();
        });
    });
  });
  describe('DELETE /api/v1/articles', () => {
    it('should delete an article', (done) => {
      const id = 8;
      chai.request(app)
        .delete(`/api/v1/articles/${id}`)
        .end((er, res) => {
          res.should.have.status(401);
          res.body.should.have.property('status').eql('error');
          // res.body.should.have.property('data').eql('no rows');
          done();
        });
    });
  });
  // comments of articles
//   describe('GET /api/v1/articles/comments', () => {
//     it('should get all comments for an article', (done) => {
//       const id = 1;
//       chai.request(app)
//         .get(`/api/v1/articles/${id}/comments`)
//         .end((er, res) => {
//           res.should.have.status(401);
//           res.body.should.have.property('status').eql('error');
//           res.body.should.have.property('data');
//           // res.body.data[0].should.have.property('comment');
//           // res.body.data[0].should.have.property('commenttype');
//           // res.body.data[0].should.have.property('inappropflag');
//           done();
//         });
//     });
//     it('should get one comment for a particular article', (done) => {
//       const id = 1;
//       const commentId = 1;
//       chai.request(app)
//         .get(`/api/v1/articles/${id}/comments/${commentId}`)
//         .end((er, res) => {
//           res.should.have.status(401);
//           res.body.should.have.property('status').eql('error');
//           res.body.should.have.property('data');
//           // res.body.data[0].should.have.property('article');
//           // res.body.data[0].should.have.property('title');
//           // res.body.data[0].should.have.property('inappropflag');
//           done();
//         });
//     });
//   });
//   describe('PUT /api/v1/articles/comments', () => {
//     it('should update an articles comment', (done) => {
//       const id = 8;
//       const commentId = 1;
//       chai.request(app)
//         .patch(`/api/v1/articles/${id}/comments/${commentId}`)
//         .send({
//           feedtype: 'article',
//           coment: 'a former comment i am now corecting as i made a mistake article is here',
//           inappropflag: false,
//         })
//         .end((er, res) => {
//           res.should.have.status(401);
//           res.body.should.have.property('status').eql('error');
//           // res.body.should.have.property('data').eql('no rows');
//           done();
//         });
//     });
//   });
//   describe('POST /api/v1/articles/comments', () => {
//     it('should create a comment for an article', (done) => {
//       const id = 13;
//       chai.request(app)
//         .post(`/api/v1/articles/${id}/comment`)
//         .send({
//           coment: 'this is just wow beautiful article is here',
//           inappropflag: false,
//           authorid: 2,
//         })
//         .end((er, res) => {
//           res.should.have.status(401);
//           res.body.should.have.property('status').eql('error');
//           // res.body.should.have.property('data').eql('created');
//           done();
//         });
//     });
//   });
//   describe('DELETE /api/v1/articles/comments', () => {
//     it('should delete a comment from an article', (done) => {
//       const id = 29;
//       const commentId = 8;
//       chai.request(app)
//         .delete(`/api/v1/articles/${id}/comments/${commentId}`)
//         .end((er, res) => {
//           res.should.have.status(401);
//           res.body.should.have.property('status').eql('error');
//           // res.body.should.have.property('data').eql('no rows');
//           done();
//         });
//     });
//   });
});
