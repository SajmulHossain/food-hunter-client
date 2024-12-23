import Swal from "sweetalert2";

const modal = (title, text, icon) => {
  Swal.fire({
    title, text, icon
  });
};

export default modal;
