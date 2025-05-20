<footer>
	<div class="legals">
		<span class="credit"
			><span class="copy">© </span><span class="title">le banc</span>&nbsp;- Tous droits réservés
		</span>
		<span>|</span>
		<ul>
			<li>
				<a href="/mentions-legales" class="legal-link">Mentions légales</a>
			</li>
			<li>
				<a href="/plan-du-site" class="legal-link">Plan du site</a>
			</li>
			<li>
				<a href="/conditions-generales" class="legal-link">CGU</a>
			</li>
		</ul>
	</div>
	<div class="links">
		<ul>
			<li>
				<a href="/">L'équipe</a>
			</li>
			<li>
				<a href="/">Notre modèle économique</a>
			</li>
			<li>
				<a href="/">Nos valeurs</a>
			</li>
			<li>
				<a href="https://www.instagram.com/le_banc_/" target="_blank" rel="noopener noreferrer">
					Instagram
				</a>
			</li>
		</ul>
	</div>
</footer>

<style lang="scss" scoped>
	footer {
		background-color: var(--primary-color);
		color: var(--secondary-color);
		padding: pxToRem(6) 0;
		border-radius: 1000px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		text-transform: lowercase;

		@media screen and (max-width: 992px) {
			flex-direction: column;
			gap: pxToRem(16);
			border-radius: 0;
		}

		::selection {
			background-color: var(--red) !important;
			color: var(--secondary-color);
		}

		.legals,
		.links {
			display: flex;
			align-items: center;
			margin: 0 auto;
			gap: pxToRem(10);
			padding: pxToRem(6) pxToRem(24);
			flex-wrap: wrap;

			ul {
				display: flex;
				gap: pxToRem(20);
				list-style-type: none;
				padding: 0;
				flex-wrap: wrap;

				li {
					a {
						color: var(--secondary-color);
						text-decoration: underline;
						text-decoration-thickness: 1px;
						text-underline-offset: 8%;
						font-size: pxToRem(14);
						transition: color 0.3s ease;

						&:hover {
							color: var(--red);
						}
					}
				}
			}
		}
	}
	.legals {
		.credit {
			display: flex;
			align-items: center;
			.copy {
				align-self: center;
				font-size: pxToRem(20);
				transform: translateY(pxToRem(4));
			}
			.title {
				font-weight: bold;
				font-style: italic;
			}
		}
	}
	footer .container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	footer .container p {
		font-size: 1.5rem;
	}
</style>
