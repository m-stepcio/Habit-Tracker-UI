

export default function Popup({ onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2>New Task</h2>
        <form>
            <input type="text"/>
        </form>
        <button onClick={() => alert("Action executed")}>
          Run Action
        </button>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
  },
};