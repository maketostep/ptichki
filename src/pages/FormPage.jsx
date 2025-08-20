import Form from "../components/Form";
import Block from "../components/ui/block";

export default function FormPage() {
  return (
    <div className="flex flex-col gap-5 m-7 mt-0">
      <Block headerText="Регистрация" children={<Form />} />
    </div>
  );
}
