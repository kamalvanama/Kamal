function UserName() {
  const [name, setName] = useState("");

  return (
    <div>
      <UserInput name={name} setName={setName} />
      <Welcome name={name} />
    </div>
  );
}

export default UserName;