/* eslint-disable radix */
/* eslint-disable consistent-return */
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import pool from '../dbConnectConfig';
import { getAllQuerries, getOneQuerries } from '../helpers/dbQuerries';

export function signup(req, res) {
  res.send('whatever_you');
}

export function signin(req, res) {
  res.send('whatever');
}

export function getAllUsers(req, res) {
  getAllQuerries(req, res, 'usertable');
}


export function getOneUser(req, res) {
  getOneQuerries(req, res, 'usertable');
}
