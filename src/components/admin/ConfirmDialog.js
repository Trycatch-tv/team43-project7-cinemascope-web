import { Dialog, DialogActions, DialogTitle, Typography } from "@mui/material/";

const ConfirmDialog = (props) => {
  const { confirmDialog, setConfirmDialog } = props;

  return (
    <Dialog open={confirmDialog.isOpen}>
      <DialogTitle>
        <Typography variant="p">
          ¿Está seguro de eliminar esta película?
        </Typography>
      </DialogTitle>
      <DialogActions>
        <button className="confirm-button" onClick={confirmDialog.onConfirm}>
          Sí
        </button>
        <button
          className="deny-button"
          onClick={() => setConfirmDialog({ isOpen: false })}
        >
          No
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
