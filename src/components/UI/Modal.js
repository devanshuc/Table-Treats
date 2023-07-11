import { Fragment } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
	return <div className={styles.backdrop}>{console.log(props)}</div>;
};

const ModalOverlay = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

const helper = document.getElementById("overlays");

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop />, helper)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				helper
			)}
		</Fragment>
	);
};

export default Modal;
