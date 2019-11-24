/* eslint-disable consistent-return */
/* eslint-disable radix */
// import pool from '../dbConnectConfig';

export function createQuerries(req, res, tableName, file) {
  res.send(`${tableName} ${file}`);
}

export function editQuerries(req, res, tableName, file) {
  res.send(`${tableName} ${file}`);
}

export function getAllQuerries(req, res, tableName) {
  res.send(tableName);
}

export function getOneQuerries(req, res, tableName) {
  res.send(tableName);
}

export function deleteQuerries(req, res, tableName) {
  res.send(tableName);
}

export function getByTag(req, res, tableName) {
  res.send(tableName);
}
