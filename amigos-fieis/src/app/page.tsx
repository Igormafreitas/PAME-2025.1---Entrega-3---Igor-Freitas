import Header from "./components/header";
import Sidebar from "./components/sidebar";

const AmigosFieis = () => {
  return (
    <div>
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
      </div>
    </div>
  );
}

export default AmigosFieis;