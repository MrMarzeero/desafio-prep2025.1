import { Router, Request, Response } from 'express'
import { FillController } from './service/controllers/FillController'

const router = Router();

/**
 * @swagger
 * /fill:
 *   post:
 *     summary: Preenche um template de post com base no contexto e tonalidade.
 *     tags:
 *       - Templates
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               template:
 *                 type: string
 *                 example: "📣 [CHAMADA]\\n🗓️ Quando: [DATA]\\n📍 Onde: [LOCAL]\\n💬 [DESCRICAO]"
 *               tonalidade:
 *                 type: string
 *                 example: "Entusiasmado"
 *               limites:
 *                 type: object
 *                 additionalProperties:
 *                   type: number
 *                 example:
 *                   CHAMADA: 40
 *                   DESCRICAO: 80
 *               contexto:
 *                 type: string
 *                 example: "A grande final do campeonato municipal de futebol acontecerá..."
 *     responses:
 *       201:
 *         description: Template preenchido com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 post_final:
 *                   type: string
 *                   example: "⚽️ Grande Final do Campeonato Municipal! 🏆 ..."
 *       500:
 *         description: Erro interno no servidor.
 */
router.post('/fill', (req: Request, res: Response) => {
    FillController.fillTemplate(req, res);
});

/**
 * @swagger
 * /format:
 *   post:
 *     summary: Gera um post formatado para redes sociais com base em contexto, tonalidade e limite de caracteres.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               contexto:
 *                 type: string
 *                 example: "A grande final do campeonato municipal de futebol acontecerá..."
 *               limite:
 *                 type: number
 *                 example: 100
 *               tonalidade:
 *                 type: string
 *                 example: "Formal"
 *     responses:
 *       201:
 *         description: Sucesso!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 post_final:
 *                   type: string
 *                   example: "🏆 A grande final do Campeonato Municipal de Futebol será no dia..."
 *       500:
 *         description: Erro interno no servidor.
 */
router.post('/format', (req: Request, res: Response) => {
    FillController.genContent(req, res);
});

export default router
