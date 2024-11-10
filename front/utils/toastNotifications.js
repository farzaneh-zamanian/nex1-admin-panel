import toast from "react-hot-toast";

const notifications = (type, msg, duration = 4000) => {
      toast.dismiss();// Dismiss any existing toasts before showing a new one
      switch (type) {
            case "CREATE":
                  toast.success(msg || "محصول با موفقیت اضافه شد", { duration }); // Allow custom message
                  break;
            case "UPDATE":
                  toast.success(msg || "محصول با موفقیت ویرایش شد", { duration }); // Allow custom message
                  break;
            case "DELETE":
                  toast.success(msg || "محصول با موفقیت حذف شد", { duration }); // Allow custom message
                  break;
            case "ERROR":
                  toast.error(`مشکلی پیش آمد، لطفا مجددا تلاش کنید \n \n message: ${msg.message} - ${msg.response.statusText} / code: ${msg.code} `, {
                        duration: duration,
                  });
                  break;

            default:
                  if (typeof toast[type] === 'function') {
                        toast[type](msg, { duration }); // Ensure duration is passed if applicable
                  } else {
                        toast.success(msg || "بررسی کامل انجام شد"); // Fallback to a default toast
                  }
      }
};

export default notifications;
