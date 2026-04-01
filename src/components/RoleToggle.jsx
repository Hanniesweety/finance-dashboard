export default function RoleToggle({ role, setRole }) {
  return (
    <div style={{padding:"20px"}}>
      <label>Select Role: </label>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}