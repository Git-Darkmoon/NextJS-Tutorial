"use client"

function error({ error }: { error: Error }) {
  return (
    <div>
      There was an error...
      <br /> {`${error}`}
    </div>
  )
}
export default error
