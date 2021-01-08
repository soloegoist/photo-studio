import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { animationOne, transition } from "../animations"
import PriceCard from "../components/Price/PriceCard"

export default function PricePage() {
	// Two-dimentional array
	const tariffs = [
		[
			"Начальный",
			[
				"Съемка свадебной прогулки на 3 часа;",
				"Консультация и планирование свадебного дня;",
				"Обработка всех 350+ фотографий, согласно портфолио;",
				"Уменьшенный размер фото для интернета;",
				"10 фото в ретуши ближних портретов;",
				"передача готового материала через электронную галерею;",
				"Срок отдачи до 30 рабочих дней.",
			],
			35000,
		],
		[
			"Классический",
			[
				"Съемка со сборов до конца банкета; (вне зависимости от количества часов);",
				"Консультация и планирование свадебного дня;",
				"Цветокоррекция всех 950+ фотографий, согласно портфолио;",
				"Уменьшенный размер фото для интернета;",
				"Ретушь фото, в основном ближние портреты молодожён;",
				"Передача готового материала через электронную галерею, онлайн доступ для вас и ваших гостей;",
				"Использование дополнительного софтбокса на фотозоне;",
				"Срок отдачи до 30 рабочих дней.",
			],
			100000,
		],
		[
			"Золото",
			[
				"Съемка со сборов до конца банкета; (вне зависимости от количества часов);",
				"Консультация и планирование свадебного дня;",
				"Цветокоррекция всех удачных 1200+ фотографий, согласно портфолио;",
				"Уменьшенный размер фото для интернета;",
				"Ретушь всех фото, в основном ближние портреты;",
				" Передача готового материала через электронную галерею;",
				"Флеш-карта и 30 распечатанных карточек 10×15  в фирменной деревянной коробочке;",
				"Фотокнига  форматом 30×30 см, 15 разворотов напечатанная на элитной шелковой бумаге, обложка из ткани или экокожи (на Ваш выбор);",
				"2 минибука для родителей;",
				"Предсвадебная съемка love-story и слайд шоу на свадебном банкете;",
				"Срок отдачи до 30 рабочих дней., 200000",
			],
			250000,
		],
	]
	return (
		<motion.div
			initial="out"
			animate="in"
			exit="out"
			variants={animationOne}
			transition={transition}>
			<PricePageEl>
				<h1>Прайс</h1>
				<h2>Доброго дня!</h2>
				<p>
					Если вы любите счастливые, теплые, атмосферные, естественные
					фотографии, и хотите в них увидеть себя, близких вам людей, родителей,
					бабушек и дедушек, тогда вы зашли по правильному адресу. В данном
					разделе вы сможете познакомится с ценами, и выбрать наиболее
					приемлемый для себя вариант. Определились? ; -) Звоните, встретимся,
					познакомимся, и начнем планировать! Бронирование даты проходит путём
					подписания договора и внесения предоплаты! Цена указана Для
					Петропавловска, поэтому для уточнения полной стоимости нужно связаться
					с фотографом, а точнее со мной. Цена за пакет может не значительно
					измениться от условий, отдалённости от города и сложности съёмочного
					процесса.
				</p>

				<PriceCard data={tariffs} />
			</PricePageEl>
		</motion.div>
	)
}

const PricePageEl = styled.section`
	max-width: 1200px;
	margin: 20px auto;
	h1 {
		font-size: 3rem;
		font-weight: 500;
	}
	h2 {
		margin: 20px 0;
		font-size: 2rem;
	}
	p {
		font-size: 1.2rem;
		margin-bottom: 50px;
	}
`
