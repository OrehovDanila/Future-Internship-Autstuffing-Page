import cx from 'classnames';
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formValueSelector, change, getFormSyncErrors } from 'redux-form';

import FileChipList from 'components/UI/FileChipList';

import { withTranslation } from 'i18n';

// eslint-disable-next-line import-order-alphabetical/order
import Arrow from '../../../public/static/icons/arrow_upload.svg';

// eslint-disable-next-line import-order-alphabetical/order
import s from './Input.styl';

const form_name = 'feedback';

const selector = formValueSelector(form_name);

const TextArea = props => {
	const { t, label, input = {}, meta: { active, error, touched } = {}, placeholder, className, autoFocus } = props;

	const dispatch = useDispatch();

	const textAreaRef = useRef();

	const inputProps = { className: cx(s.input, s.area), placeholder, ...input };

	const fileList = [...(useSelector(state => selector(state, 'files')) || [])];

	const filesError = useSelector(state => getFormSyncErrors(form_name)(state)).files;

	useEffect(() => {
		const dropArea = textAreaRef.current;

		const preventDefaults = e => {
			e.preventDefault();
			e.stopPropagation();
		};

		const highlight = e => {
			dropArea.classList.add(s.dropHighlight);
		};

		const unhighlight = e => {
			dropArea.classList.remove(s.dropHighlight);
		};

		const handleDrop = e => {
			const dt = e.dataTransfer;

			dispatch(change(form_name, 'files', [...fileList, ...dt.files]));
		};

		['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
			dropArea.addEventListener(eventName, preventDefaults, false);
			document.body.addEventListener(eventName, preventDefaults, false);
		});

		['dragenter', 'dragover'].forEach(eventName => {
			dropArea.addEventListener(eventName, highlight, false);
		});

		['dragleave', 'drop'].forEach(eventName => {
			dropArea.addEventListener(eventName, unhighlight, false);
		});

		dropArea.addEventListener('drop', handleDrop, false);
	}, [dispatch, fileList]);

	return (
		<label className={cx(s.label, s.areaLabel, touched && error && s.error, className)}>
			{label}
			<div className={s.areaWrap}>
				<textarea rows="16" {...inputProps} ref={textAreaRef} autoFocus={autoFocus} />
				<div className={s.dropHint}>
					<Arrow className={s.uploadArrow} />
					<div>
						Загрузите файл, <span style={{ color: '#969696' }}>до 10 мб.</span>
					</div>
				</div>
			</div>
			{fileList.length > 0 && <FileChipList list={fileList} className={s.fileList} />}
			{filesError && <span className={s.errorText}>{t(filesError, { count: fileList.length + 1 })}</span>}
		</label>
	);
};

export default withTranslation('common')(TextArea);
