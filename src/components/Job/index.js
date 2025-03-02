const Job = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    packagePerAnnum,
    title,
    rating,
    location,
  } = jobDetails

  return (
    <li>
      <img src={companyLogoUrl} alt="job details company logo" />
      <h1>{title}</h1>
      <p>{rating}</p>
      <p>{location}</p>
      <p>{employmentType}</p>
      <p>{packagePerAnnum}</p>
      <h2>Description</h2>
      <p>{jobDescription}</p>
    </li>
  )
}

export default Job
