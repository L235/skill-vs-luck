import React, { useEffect, useState } from "react";

const Applicant = function () {
  this.skill = Math.random();
  this.luck = Math.random();
};

const ShowResults = ({ numApplicants, numAccepted, luckImportance }) => {
  const [results, setResults] = useState(null);
  const calculateRamdomizedResults = (
    numApplicants,
    numAccepted,
    luckImportance
  ) => {
    const skillImportance = 1 - luckImportance;
    const applicants = [];
    for (let i = 0; i < numApplicants; i++) {
      applicants.push(new Applicant());
    }
    applicants.sort((a, b) => -1 * (a.skill - b.skill));
    const bestApplicants = applicants.slice(0, numAccepted);
    applicants.sort(
      (a, b) =>
        -1 *
        (skillImportance * a.skill +
          luckImportance * a.luck -
          (skillImportance * b.skill + luckImportance * b.luck))
    );
    const acceptedApplicants = applicants.slice(0, numAccepted);
    const inBoth = acceptedApplicants.filter((value) =>
      bestApplicants.includes(value)
    );
    const out = {
      numInBoth: inBoth.length,
      acceptedAvgLuck:
        acceptedApplicants.reduce((total, a) => total + a.luck, 0) /
        acceptedApplicants.length,
    };
    setResults(out);
  };

  useEffect(() => {
    calculateRamdomizedResults(numApplicants, numAccepted, luckImportance);
  }, [numApplicants, numAccepted, luckImportance]);

  if (results === null) {
    return <div></div>;
  }
  return (
    <div>
      Of the {numAccepted} applicants accepted, <b>{results.numInBoth}</b> (
      {parseFloat(100 * (results.numInBoth / numAccepted)).toFixed(2)}%) would
      have been accepted based only on merit.{" "}
      <b>{numAccepted - results.numInBoth} </b>(
      {parseFloat(
        100 * ((numAccepted - results.numInBoth) / numAccepted)
      ).toFixed(2)}
      %) applicants who would have been accepted if decisions were based only on
      merit were instead denied.
      <p />
      The average successful applicant had luck in the{" "}
      {(100 * parseFloat(results.acceptedAvgLuck)).toFixed(2)}th percentile,
      whereas if luck had played no role, the average successful applicant would
      have had luck in the 50th percentile.
    </div>
  );
};

export default ShowResults;
