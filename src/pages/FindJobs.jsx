import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FindJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/jobs");
        const data = await res.json();
        setjobs(data);
      } catch (error) {
        console("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return <div>{jobs.jobName}</div>;
};

export default FindJobs;
