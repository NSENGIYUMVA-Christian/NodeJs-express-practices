const getAllJobs = async (req, res) => {
  res.send("get all jobs");
};
const getJob = async (req, res) => {
  res.send("get job");
};
const createJob = async (req, res) => {
  res.send("create job");
};
const updateJobs = async (req, res) => {
  res.send("update job");
};
const deleteJobs = async (req, res) => {
  res.send("delete job");
};

module.exports = { getAllJobs, getJob, createJob, updateJobs, deleteJobs };
