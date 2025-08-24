const BottomBar = ({ enabled = true, onContinue, buttonText = "Continue" }) => {
  return (
    <div
      className="bottom-bar border-top"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#fff",
        padding: "14px 0",
        zIndex: 1030,
        boxShadow: "0 -1px 6px rgba(0,0,0,0.04)",
      }}
    >
      <div className="container d-flex justify-content-end">
        <button
          type="button"
          className={`btn ${enabled ? "btn-primary" : "btn-secondary"} px-4 py-2 fw-semibold`}
          disabled={!enabled}
          onClick={onContinue}
          style={{ minWidth: 160 }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
