import Button from "@/components/atoms/Button";
import { useCreateUser } from "../hooks/useCreateUser";
export default function CreateUserForm({ onSuccess }: { onSuccess: () => void }) {
  const { mutate, isPending, error } = useCreateUser();
  const handleSubmit = () => {
    const payload = { name: "elsayed", email: "test@gmail.com", password: "123456789" };
    mutate(payload, {
      onSuccess,
      onError: err => console.log("Create failed:", err.message),
    });
  };

  return (
    <div className="ds-container">
      <Button onClick={handleSubmit} disabled={isPending}>
        {isPending ? "...جاري انشاء" : "انشاء مستخدم"}
      </Button>
      {error && <p className="text-red-500">{error.message || "حدث خطأ"}</p>}
    </div>
  );
}
