import React, { useEffect, useState } from "react";

const Applicant = function () {
  this.skill = Math.random();
  this.luck = Math.random();
};

const ShowResults = ({ numApplicants, numAccepted, luckImportance }) => {
  const [results, setResults] = useState(null);

  useEffect(() => {
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
    const numInBoth = inBoth.length;
    const percentInBoth = parseFloat(100 * (numInBoth / numAccepted));
    const acceptedAvgLuck =
      acceptedApplicants.reduce((total, a) => total + a.luck, 0) /
      acceptedApplicants.length;
    const acceptedAvgLuckPercentile = 100 * parseFloat(acceptedAvgLuck);
    const out = {
      numInBoth,
      acceptedAvgLuck,
      percentInBoth,
      acceptedAvgLuckPercentile,
    };
    setResults(out);
  }, [numApplicants, numAccepted, luckImportance]);

  if (results === null) {
    return <div></div>;
  }
  return (
    <div>
      Of the {numAccepted} applicants accepted, <b>{results.numInBoth}</b> (
      {results.percentInBoth.toFixed(2)}%) would have been accepted based only
      on merit. <b>{numAccepted - results.numInBoth} </b>(
      {(100 - results.percentInBoth).toFixed(2)}
      %) would not have been admitted if decisions were based only on merit.
      <p />
      The average successful applicant had luck in the{" "}
      {results.acceptedAvgLuckPercentile.toFixed(2)}th percentile, whereas if
      luck had played no role, the average successful applicant would have had
      luck in the 50th percentile.
    </div>
  );
};

export default ShowResults;
