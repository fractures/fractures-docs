const SecondaryButton = props => (
	<span className="btn flex flex-ycenter unselectable relative flex-gap-1">
		<span>{props.label}</span>
		<style jsx>{`
			.btn {
				position: relative;
				display: inline-flex;
				padding: 0 0.75rem;

				border: 0;
				border-radius: 0.25rem;
				outline: none;
				transition: background-color 100ms ease;

				font-size: 0.875rem;
				font-weight: 600;
				line-height: 2.5rem;
				cursor: pointer;
			}

			.btn {
				background-color: var(--color-gray-100);
				color: var(--color-gray-700);
			}

			.btn:hover {
				background-color: var(--color-gray-300);
			}
		`}</style>
	</span>
)

export default SecondaryButton
