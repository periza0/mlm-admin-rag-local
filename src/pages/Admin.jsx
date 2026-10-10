import { useState, useEffect } from "react";
import { API_URL } from "../config";
import { freshUrl } from "../lib/apiCache";
export default function Admin() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [achievement1, setAchievement1] = useState("");
  const [achievement2, setAchievement2] = useState("");
  const [achievement3, setAchievement3] = useState("");
  const [achievement4, setAchievement4] = useState("");
  const [galleryFile, setGalleryFile] =
  useState(null);
const [gallery, setGallery] =
  useState([]);

  const [players, setPlayers] = useState([]);

  async function fetchPlayers() {
    try {
      const response = await fetch(
        freshUrl(`${API_URL}/api/ach`),
        {
          cache: "no-store",
        }
      );

      const data = await response.json();

      setPlayers(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchGallery() {
    try {
      const response = await fetch(
        freshUrl(`${API_URL}/api/gallery`),
        {
          cache: "no-store",
        }
      );
    
      const data = await response.json();
    
      setGallery(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPlayers();
    fetchGallery();
  }, []);

  const addPlayer = async () => {
    try {
      let imageUrl = "";
  
      if (file) {
        const formData = new FormData();
  
        formData.append("image", file);
  
        const uploadResponse = await fetch(
          `${API_URL}/api/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
  
        const uploadData =
          await uploadResponse.json();
  
        imageUrl = uploadData.imageUrl;
      }
  
      const response = await fetch(
        `${API_URL}/api/ach`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            image: imageUrl,
            achievements: [
              achievement1,
              achievement2,
              achievement3,
              achievement4,
            ].filter(Boolean),
          }),
        }
      );
  
      const data = await response.json();
  
      console.log(data);
  
      alert("Player Added!");
  
      setName("");
      setFile(null);
  
      setAchievement1("");
      setAchievement2("");
      setAchievement3("");
      setAchievement4("");
  
      fetchPlayers();
    } catch (error) {
      console.log(error);
    }
  };

  const deletePlayer = async (id) => {
    try {
      await fetch(
        `${API_URL}/api/ach/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchPlayers();
    } catch (error) {
      console.log(error);
    }
  };
  const addGalleryImage = async () => {
    try {
      let imageUrl = "";
  
      if (galleryFile) {
        const formData = new FormData();
  
        formData.append("image", galleryFile);
  
        const uploadResponse = await fetch(
          `${API_URL}/api/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
  
        const uploadData =
          await uploadResponse.json();
  
        imageUrl = uploadData.imageUrl;
      }
  
      await fetch(
        `${API_URL}/api/gallery`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            image: imageUrl,
          }),
        }
      );
  
      setGalleryFile(null);
  
      fetchGallery();
    } catch (error) {
      console.log(error);
    }
  };
  
  const deleteGalleryImage = async (
    id
  ) => {
    await fetch(
      `${API_URL}/api/gallery/${id}`,
      {
        method: "DELETE",
      }
    );
  
    fetchGallery();
  };
  return (
    <div className="max-w-xl mx-auto px-6 pt-45 pb-10">
      <h1>Admin Panel</h1>

      <input
        type="text"
        placeholder="Player Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />
      <div className="mb-4">
  <label className="block mb-2 font-medium">
    Player Photo
  </label>

  <input
    type="file"
    onChange={(e) =>
      setFile(e.target.files[0])
    }
    className="w-full rounded-xl border p-3 bg-white"
  />

  {file && (
    <p className="mt-2 text-base text-slate-500">
      Selected: {file.name}
    </p>
  )}
</div>

<br />
<br />
      <input
  type="text"
  placeholder="Achievement 1"
  value={achievement1}
  onChange={(e) =>
    setAchievement1(e.target.value)
  }
/>

<br /><br />

<input
  type="text"
  placeholder="Achievement 2"
  value={achievement2}
  onChange={(e) =>
    setAchievement2(e.target.value)
  }
/>

<br /><br />

<input
  type="text"
  placeholder="Achievement 3"
  value={achievement3}
  onChange={(e) =>
    setAchievement3(e.target.value)
  }
/>

<br /><br />

<input
  type="text"
  placeholder="Achievement 4"
  value={achievement4}
  onChange={(e) =>
    setAchievement4(e.target.value)
  }
/>

      <br />
      <br />

      <button
  onClick={addPlayer}
  className="w-full bg-blue-600 text-white p-3 rounded-xl"
>
  Add Player
</button>

      <hr />

      <h2>Players</h2>

      {players.map((player) => (
        <div
          key={player._id}
          style={{
            marginBottom: "20px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <h3>{player.name}</h3>

          <ul>
            {player.achievements.map(
              (achievement, index) => (
                <li key={index}>
                  {achievement}
                </li>
              )
            )}
          </ul>

          <button
            onClick={() =>
              deletePlayer(player._id)
            }
          >
            Delete
          </button>
        </div>
      ))}
      <hr className="my-10" />

      <h2 className="text-2xl font-bold mb-4">
  Gallery Management
</h2>

<input
  type="file"
  onChange={(e) =>
    setGalleryFile(
      e.target.files[0]
    )
  }
/>

<br />
<br />

<button
  onClick={addGalleryImage}
  className="w-full bg-green-600 text-white p-3 rounded-xl"
>
  Add Gallery Image
</button>

<hr className="my-6" />

{gallery.map((item) => (
  <div
    key={item._id}
    style={{
      marginBottom: "20px",
    }}
  >
    <img
      src={item.image}
      alt=""
      style={{
        width: "150px",
        borderRadius: "10px",
      }}
    />

    <br />
    <br />

    <button
      onClick={() =>
        deleteGalleryImage(
          item._id
        )
      }
    >
      Delete
    </button>
  </div>
))}
<button
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }}
>
  Logout
</button>
    </div>
  );
}
