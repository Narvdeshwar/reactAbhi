import { useRouteError } from "react-router";
const error = () => {
  const err = useRouteError();
  console.log(err)
  return (
    <div>
      <div>Oops........</div>
      <h1>Somthing went wrong</h1>
      <h1>{err.status}:{err.statusText}</h1>
    </div>
  );
}

export default error;
