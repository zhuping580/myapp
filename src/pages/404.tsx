export default function NotFindPage(props) {
  return (
    <div>
      <h1>404</h1>
      <button onClick={()=>props.history.push('/')}>Go to index page</button>
    </div>
  );
}
