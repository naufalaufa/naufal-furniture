import { Link } from "react-router-dom";
import { MdMessage } from "react-icons/md";

const Contact = () => {
  return (
    <Link
      to={"/contact"}
      className="fixed bottom-8 left-5 bg-white rounded-lg "
    >
      <span className="bg-white  rounded-lg  ">
        <MdMessage size={30} className="text-orange-500" />
      </span>
    </Link>
  );
};

export default Contact;
