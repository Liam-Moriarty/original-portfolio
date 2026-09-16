import { STATUS } from "../../data/projects";
import { cn } from "../../lib/utils";

const StatusBadge = ({ status, className, dotOnly = false }) => {
  const meta = STATUS[status] ?? STATUS.pending;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span
        className={cn("h-2 w-2 shrink-0 rounded-full", meta.dot, meta.glow)}
        aria-hidden="true"
      />
      {!dotOnly && (
        <span className="font-medium text-text-light-gray">{meta.label}</span>
      )}
    </div>
  );
};

export default StatusBadge;
