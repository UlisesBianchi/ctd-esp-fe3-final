import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Detail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <>
      <h1>Detalles Dentista {id}</h1>
      {user && (
        <div style={{ textAlign: "center" }}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Telefono: {user.phone}</p>
          <p>Pagina Web: {user.website}</p>
        </div>
      )}
    </>
  );
};

export default Detail;
