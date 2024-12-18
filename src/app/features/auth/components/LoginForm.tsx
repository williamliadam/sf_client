import { useTransition } from "react";
import { useLoginFormState } from "./LoginFormAction";
import { useTranslation } from "react-i18next";
import { TextInput } from "@app/components/TextInput";

export const LoginForm = () => {
  const [state, formAction] = useLoginFormState();
  const [isPending, startTransition] = useTransition();
  const { t } = useTranslation("formTranslation");

  return (
    <div className=" w-full flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          startTransition(() =>
            formAction(new FormData(event.target as HTMLFormElement)),
          );
        }}
        className="flex flex-col w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">{t("login")}</h2>
        {isPending ? (
          <p className="text-center text-gray-500">{t("loading")}</p>
        ) : (
          state.message && <p className="text-center text-red-500">{t(state.message)}</p>
        )}
        <TextInput id="email" type="email" message={state.errors?.email} />
        <TextInput id="password" type="password" message={state.errors?.password} />
        <button
          type="submit"
          disabled={isPending}
          className={`w-full py-2 text-white rounded-lg ${
            isPending ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isPending ? t("loading") : t("login")}
        </button>
      </form>
    </div>
  );
};
