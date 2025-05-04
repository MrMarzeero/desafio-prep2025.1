import { Router, Request, Response } from 'express'
import { FillController } from './service/controllers/FillController'

const router = Router();

/**
 * @swagger
 * /fill:
 *   post:
 *     summary: Preenche um template de post com base no contexto, tonalidade e limites de caracteres opcionais.
 *     tags:
 *       - Templates
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - contexto
 *               - template
 *             properties:
 *               template:
 *                 type: string
 *                 description: |
 *                   Template de texto que será preenchido automaticamente com base no contexto fornecido.
 *                   Os placeholders no template devem estar entre colchetes (ex: [CHAMADA], [DATA], [LOCAL], [DESCRICAO]).
 *                   O template pode conter emojis, textos fixos e múltiplas linhas.
 *                 example: "📣 [CHAMADA]\n🗓️ Quando: [DATA]\n📍 Onde: [LOCAL]\n💬 [DESCRICAO]"
 *               tonalidade:
 *                 type: string
 *                 description: |
 *                   Tom a ser aplicado no texto gerado. Pode ser 'Formal', 'Entusiasmado', 'Neutro' ou 'Descontraído'.
 *                   Se omitido, será aplicado o tom padrão 'Neutro'.
 *                 example: "Entusiasmado"
 *               limites:
 *                 type: object
 *                 description: |
 *                   Objeto opcional definindo o limite máximo de caracteres para cada placeholder no texto gerado.
 *                   Se omitido, não há limite de caracteres.
 *                 additionalProperties:
 *                   type: number
 *                 example:
 *                   CHAMADA: 40
 *                   DESCRICAO: 80
 *               contexto:
 *                 type: string
 *                 description: |
 *                   Descrição geral do evento ou conteúdo a ser usado para gerar o post.
 *                 example: "A grande final do campeonato municipal de futebol acontecerá..."
 *     responses:
 *       '201':
 *         description: Template preenchido com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 post_final:
 *                   type: string
 *                   example: "⚽️ Grande Final do Campeonato Municipal! 🏆 ..."
 *       '500':
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
 *     tags:
 *       - Templates
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - contexto
 *             properties:
 *               contexto:
 *                 type: string
 *                 description: "Descrição geral do evento ou conteúdo a ser usado para gerar o post."
 *                 example: "A grande final do campeonato municipal de futebol acontecerá..."
 *               limite:
 *                 type: number
 *                 description: "Limite máximo de caracteres para o texto gerado. Se omitido, não há limite."
 *                 example: 100
 *               tonalidade:
 *                 type: string
 *                 description: |
 *                   Tom a ser aplicado no texto gerado. Pode ser 'Formal', 'Entusiasmado', 'Neutro' ou 'Descontraído'.
 *                   Se omitido, será aplicado o tom padrão 'Neutro'.
 *                 example: "Formal"
 *     responses:
 *       201:
 *         description: Post formatado gerado com sucesso.
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

export default router;