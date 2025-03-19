/**
 * @swagger
 * /permissions/create-permission:
 *   post:
 *     tags:
 *       - permissions
 *     summary: Tạo mới nhóm quyền
 *     description: Tạo mới nhóm quyền trong hệ thống
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - name
 *             properties:
 *               id:
 *                 type: string
 *                 example: "MNQ-EEE261C4BA"
 *               name:
 *                 type: string
 *                 example: "Tài khoản"
 *     responses:
 *       201:
 *         description: Tạo mới nhóm quyền thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 errCode:
 *                   type: number
 *                   example: 0
 *                 message:
 *                   type: string
 *                   example: "Tạo mới nhóm quyền thành công"
 *       400:
 *         description: Thiếu thông tin bắt buộc
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 2
 *                 message:
 *                   type: string
 *                   example: "Thiếu các thông tin bắt buộc"
 *       409:
 *         description: Nhóm quyền đã tồn tại
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 1001
 *                 message:
 *                   type: string
 *                   example: "Nhóm quyền này đã tồn tại"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 1
 *                 message:
 *                   type: string
 *                   example: "Lỗi server"
 */

/**
 * @swagger
 * /permissions/create-child-permission:
 *   post:
 *     tags:
 *       - permissions
 *     summary: Tạo mới quyền con
 *     description: Tạo mới quyền con thuộc nhóm quyền
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - parent_id
 *               - permissions
 *             properties:
 *               parent_id:
 *                 type: string
 *                 example: "PARENT-12345"
 *               permissions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Xem báo cáo"
 *     responses:
 *       201:
 *         description: Tạo mới quyền con thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 errCode:
 *                   type: number
 *                   example: 0
 *                 message:
 *                   type: string
 *                   example: "Tạo mới quyền hạn thành công"
 *       400:
 *         description: Thiếu thông tin bắt buộc
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 2
 *                 message:
 *                   type: string
 *                   example: "Thiếu dữ liệu bắt buộc"
 *       409:
 *         description: Quyền con đã tồn tại hoặc bị trùng tên
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 1001
 *                 message:
 *                   type: string
 *                   example: "Các quyền con không được trùng tên"
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 1
 *                 message:
 *                   type: string
 *                   example: "Lỗi server"
 */

/**
 * @swagger
 * /permissions/all-permissions:
 *   get:
 *     tags:
 *       - permissions
 *     summary: Lấy danh sách nhóm quyền
 *     description: Trả về danh sách nhóm quyền có phân trang.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Số trang cần lấy (mặc định là 1).
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 3
 *         description: Số lượng nhóm quyền trên mỗi trang (mặc định là 3).
 *     responses:
 *       200:
 *         description: Lấy danh sách nhóm quyền thành công.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 errCode:
 *                   type: number
 *                   example: 0
 *                 message:
 *                   type: string
 *                   example: "Lấy các nhóm quyền thành công"
 *                 data:
 *                   type: object
 *                   properties:
 *                     permissions:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: "MNQ-EEE261C4BA"
 *                           name:
 *                             type: string
 *                             example: "Tài khoản"
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-02-28T12:00:00.000Z"
 *                     pagination:
 *                       type: object
 *                       properties:
 *                         total:
 *                           type: integer
 *                           example: 10
 *                         totalPages:
 *                           type: integer
 *                           example: 4
 *                         currentPage:
 *                           type: integer
 *                           example: 1
 *                         pageSize:
 *                           type: integer
 *                           example: 3
 *       500:
 *         description: Lỗi server.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 1
 *                 message:
 *                   type: string
 *                   example: "Lỗi server"
 */

/**
 * @swagger
 * /permissions/permission-info/{id}:
 *   get:
 *     tags:
 *       - permissions
 *     summary: Lấy thông tin quyền theo ID
 *     description: Trả về thông tin chi tiết của một quyền dựa trên ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "MNQ-EEE261C4BA"
 *         description: ID của quyền cần lấy thông tin.
 *     responses:
 *       200:
 *         description: Lấy thông tin quyền thành công.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 errCode:
 *                   type: number
 *                   example: 0
 *                 message:
 *                   type: string
 *                   example: "Lấy thông tin quyền thành công"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "MNQ-EEE261C4BA"
 *                     name:
 *                       type: string
 *                       example: "Tài khoản"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-02-28T12:00:00.000Z"
 *       404:
 *         description: Không tìm thấy quyền.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 2
 *                 message:
 *                   type: string
 *                   example: "Không tìm thấy quyền này"
 *       500:
 *         description: Lỗi server.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 1
 *                 message:
 *                   type: string
 *                   example: "Lỗi server"
 */

/**
 * @swagger
 * /permissions/search-permission:
 *   post:
 *     tags:
 *       - permissions
 *     summary: Tìm kiếm quyền
 *     description: Tìm kiếm quyền theo tên trong hệ thống.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - query
 *             properties:
 *               query:
 *                 type: string
 *                 example: "Tài khoản"
 *                 description: Từ khóa tìm kiếm quyền theo tên.
 *     responses:
 *       200:
 *         description: Tìm kiếm quyền thành công.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 errCode:
 *                   type: number
 *                   example: 0
 *                 message:
 *                   type: string
 *                   example: "Tìm quyền thành công"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "PERM-001"
 *                       name:
 *                         type: string
 *                         example: "Tài khoản"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-02-28T12:00:00.000Z"
 *       400:
 *         description: Thiếu thông tin tìm kiếm.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 2
 *                 message:
 *                   type: string
 *                   example: "Thiếu từ khóa tìm kiếm"
 *       500:
 *         description: Lỗi server.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 1
 *                 message:
 *                   type: string
 *                   example: "Lỗi server"
 */

/**
 * @swagger
 * /permissions/update-permission/{id}:
 *   put:
 *     tags:
 *       - permissions
 *     summary: Cập nhật thông tin quyền
 *     description: Cập nhật tên hoặc mô tả của quyền trong hệ thống.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của quyền cần cập nhật.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Quản lý tài khoản"
 *                 description: Tên mới của quyền.
 *               description:
 *                 type: string
 *                 example: "Quyền này cho phép quản lý tài khoản người dùng."
 *                 description: Mô tả mới của quyền.
 *     responses:
 *       200:
 *         description: Cập nhật quyền thành công.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 errCode:
 *                   type: number
 *                   example: 0
 *                 message:
 *                   type: string
 *                   example: "Cập nhật quyền thành công"
 *       400:
 *         description: Không có thông tin cập nhật.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 3
 *                 message:
 *                   type: string
 *                   example: "Không có thông tin cập nhật"
 *       404:
 *         description: Không tìm thấy quyền.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 2
 *                 message:
 *                   type: string
 *                   example: "Không tìm thấy quyền này"
 *       500:
 *         description: Lỗi server.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 1
 *                 message:
 *                   type: string
 *                   example: "Lỗi server"
 */

/**
 * @swagger
 * /permissions/delete-permission/{id}:
 *   delete:
 *     tags:
 *       - permissions
 *     summary: Xóa quyền
 *     description: Xóa một quyền khỏi hệ thống theo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của quyền cần xóa.
 *     responses:
 *       200:
 *         description: Xóa quyền thành công.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 errCode:
 *                   type: number
 *                   example: 0
 *                 message:
 *                   type: string
 *                   example: "Xóa quyền thành công"
 *       404:
 *         description: Không tìm thấy quyền.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 2
 *                 message:
 *                   type: string
 *                   example: "Không tìm thấy quyền này"
 *       500:
 *         description: Lỗi server.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errCode:
 *                   type: number
 *                   example: 1
 *                 message:
 *                   type: string
 *                   example: "Lỗi server"
 */

