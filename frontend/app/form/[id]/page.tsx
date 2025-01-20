"use client";
import TextInput from "../../FormElements/TextInput";
import FileInput from "../../FormElements/FileInput";
import DropDown from "../../FormElements/DropDown";
import DropDownItem from "../../FormElements/DropDownItem";
import MultipleChoice from "../../FormElements/MultipleChoice";
import MultipleChoiceItems from "../../FormElements/MultipleChoiceItems";
import Title from "../../FormElements/Title";
import CheckBox from "../../FormElements/CheckBox";
import CheckBoxItem from "../../FormElements/CheckBoxItem";
import TextArea from "../../FormElements/TextArea";
import { FormEvent, useLayoutEffect, useState } from "react";
import FormType from "../../Interfaces/FormType";
import { incompleteContext } from "../../Context/FormContext";

const Form = () => {
  const [form, setForm] = useState<FormType>({title:undefined, description:undefined, imageSrc:undefined, inputs:[]});
  const [incomplete, setIncomplete] = useState<string[]>([]);

  useLayoutEffect(() => {
    fetch("http://192.168.8.186:3000/form/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setForm(data);
      });
  }, []);
  const getCheckedCheckboxes = (formId: string) => {
    const formElement = document.getElementById(formId);
    if (!formElement) {
      console.error(`Element with id "${formId}" not found.`);
      return [];
    }

    const checkedCheckboxes = Array.from(
      formElement.querySelectorAll('input[type="checkbox"]:checked')
    ).map((checkbox) => (checkbox as HTMLInputElement).name);

    return checkedCheckboxes;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const incompleteFields: string[] = [];
    form.inputs.map((input) => {
      if (input.type == "checkBox") {
        const checkedCheckboxes: string[] = getCheckedCheckboxes(input.id);
        formData.append(input.id, checkedCheckboxes.toString());
        input.options?.map((option) => {
          formData.delete(option.key.toString());
        });
      }
      const formInput = formData.get(input.id);
      if (
        input.required &&
        (formInput === "" ||
          formInput === null ||
          (formInput instanceof File && formInput.name === ""))
      ) {
        incompleteFields.push(input.id);
      }
    });

    setIncomplete(incompleteFields);
    // formData.delete("photo")
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    if(incomplete.length===0){
        fetch("http://192.168.8.186:3000/form/submit", {
          method: "post",
          body: formData,
          credentials: "include",
        }).then((res) => {
          console.log(res);
        });
    }

    // for (const [key, value] of formData.entries()) {

    //   console.log(`${key}: ${value}`);
    // }
  };
  return (
    <div className="m-2 flex justify-center">
      <form
        action=""
        method="post"
        encType="multipart/form-data"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="bg-slate-800 rounded-lg flex flex-wrap w-full p-2 md:w-1/2"
      >
        {form && form.title && form.description && form.imageSrc && (
          <>
            <Title
              title={form.title}
              description={form.description}
              src={form.imageSrc}
            />
            <incompleteContext.Provider value={{ incomplete, setIncomplete }}>
              {form.inputs?.map((input) => {
                switch (input.type) {
                  case "text":
                    return (
                      <TextInput
                        id={input.id}
                        key={input.id}
                        name={input.name}
                        description={input.description}
                        placeholder={input.placeholder}
                        type={"text"}
                        required={input.required}
                      />
                    );
                    break;
                  case "email":
                    return (
                      <TextInput
                        id={input.id}
                        key={input.id}
                        name={input.name}
                        description={input.description}
                        placeholder={input.placeholder}
                        type={"email"}
                        required={input.required}
                      />
                    );
                    break;
                  case "date":
                    return (
                      <TextInput
                        id={input.id}
                        key={input.id}
                        name={input.name}
                        description={input.description}
                        type={"date"}
                        required={input.required}
                      />
                    );
                    break;
                  case "time":
                    return (
                      <TextInput
                        id={input.id}
                        key={input.id}
                        name={input.name}
                        description={input.description}
                        type={"time"}
                        required={input.required}
                      />
                    );
                    break;
                  case "file":
                    return (
                      <FileInput
                        id={input.id}
                        key={input.id}
                        name={input.name}
                        description={input.description}
                        accept={input.accept}
                        required={input.required}
                      />
                    );
                    break;
                  case "dropdown":
                    return (
                      <DropDown
                        id={input.id}
                        key={input.id}
                        name={input.name}
                        description={input.description}
                        required={input.required}
                      >
                        {input.options?.map((item) => {
                          return (
                            <DropDownItem
                              value={item.key.toString()}
                              name={item.value}
                              key={item.key}
                            />
                          );
                        })}
                      </DropDown>
                    );
                    break;
                  case "multipleChoice":
                    return (
                      <MultipleChoice
                        id={input.id}
                        name={input.name}
                        key={input.id}
                        description={input.description}
                        required={input.required}
                      >
                        {input.options?.map((item) => {
                          return (
                            <MultipleChoiceItems
                              id={input.id}
                              key={item.key}
                              value={item.value}
                            />
                          );
                        })}
                      </MultipleChoice>
                    );
                    break;
                  case "checkBox":
                    return (
                      <CheckBox
                        name={input.name}
                        description={input.description}
                        key={input.id}
                        id={input.id}
                        required={input.required}
                      >
                        {input.options?.map((item) => {
                          return (
                            <CheckBoxItem
                              id={item.key.toString()}
                              key={item.key}
                              value={item.value}
                            />
                          );
                        })}
                      </CheckBox>
                    );
                    break;
                  case "textArea":
                    return (
                      <TextArea
                        id={input.id}
                        key={input.id}
                        name={input.name}
                        description={input.description}
                        placeholder={input.placeholder?.toString() || ""}
                        required={input.required}
                      />
                    );
                    break;
                  default:
                    break;
                }
              })}
              {incomplete.length !== 0 && (
                <div className="bg-red-500 w-full my-1 p-2 justify-center flex rounded-xl text-rose-50">
                  Complete all the incomplete Field
                </div>
              )}
              <div className="flex w-full">
                <button
                  type="submit"
                  className="w-1/2 m-2 bg-slate-200 text-slate-900 rounded-full py-2"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="w-1/2 m-2 bg-slate-200 text-slate-900 rounded-full py-2"
                >
                  Clear
                </button>
              </div>
            </incompleteContext.Provider>
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
