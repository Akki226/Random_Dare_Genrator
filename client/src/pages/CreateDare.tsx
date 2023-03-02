import { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
const CreateDare = () => {
  const { data: user } = useGetIdentity();
    const [propertyImage, setPropertyImage] = useState({ name: "", url: "" });
    const {
        refineCore: { onFinish, formLoading },
        register,
        //handleSubmit,
    } = useForm();
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event:any) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event:any) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // You can submit the form data here
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ marginBottom: "2rem", fontSize: "2rem", fontWeight: "bold" }}>Add a Dare</h2>

      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <label htmlFor="title" style={{ color: "black", marginBottom: "0.5rem", fontSize: "1.2rem", fontWeight: "bold" }}>Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          style={{ padding: "0.5rem", borderRadius: "5px", border: "none", width: "100%", backgroundColor: "#f2f2f2", fontSize: "1.2rem" }}
        />
      </div>

      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <label htmlFor="description" style={{ color:"black", marginBottom: "0.5rem", fontSize: "1.2rem", fontWeight: "bold" }}>Dare Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          style={{ padding: "0.5rem", borderRadius: "5px", border: "none", width: "100%", backgroundColor: "#f2f2f2", fontSize: "1.2rem", resize: "none", minHeight: "150px" }}
        />
      </div>

      <button type="submit" style={{ padding: "0.5rem 1rem", borderRadius: "5px", border: "none", backgroundColor: "#06c", color: "#fff", fontSize: "1.2rem", fontWeight: "bold", cursor: "pointer" }}>Submit</button>
    </form>
    </div>
  )
}

export default CreateDare
