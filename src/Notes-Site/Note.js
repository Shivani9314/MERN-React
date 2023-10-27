const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<p onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'><i class="fa-solid fa-trash"></i>
          </p>
			</div>
		</div>
	);
};

export default Note;