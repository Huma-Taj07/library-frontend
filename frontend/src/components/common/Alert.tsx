import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from "react-icons/fi";

interface AlertProps {
  title?: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
  onClose?: () => void;
}

export default function Alert({
  title,
  message,
  type = "info",
  onClose,
}: AlertProps) {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-800 [&_svg]:text-blue-500",
    success:
      "bg-green-50 border-green-200 text-green-800 [&_svg]:text-green-500",
    warning:
      "bg-yellow-50 border-yellow-200 text-yellow-800 [&_svg]:text-yellow-500",
    error: "bg-red-50 border-red-200 text-red-800 [&_svg]:text-red-500",
  };

  const icons = {
    info: FiInfo,
    success: FiCheckCircle,
    warning: FiAlertCircle,
    error: FiXCircle,
  };

  const Icon = icons[type];

  return (
    <div className={`p-4 border rounded-lg flex gap-3 ${styles[type]}`}>
      <Icon size={20} className="flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        {title && <h4 className="font-semibold mb-1">{title}</h4>}
        <p className="text-sm">{message}</p>
      </div>
      {onClose && (
        <button onClick={onClose} className="text-current hover:opacity-70">
          ✕
        </button>
      )}
    </div>
  );
}
