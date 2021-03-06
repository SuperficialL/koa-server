/*
 * @author: SuperficialL
 * @Date: 2019-08-24 12:35:32
 * @LastEditTime: 2020-08-26 17:16:28
 * @Description: 文章模型
 */
const mongoosePaginate = require("mongoose-paginate");
const autoIncrement = require("mongoose-auto-increment");
const { mongoose } = require("../core/mongodb");
const {
  PUBLISH_STATE,
} = require("../core/constants");

const articleSchema = new mongoose.Schema(
  {
    // 标题
    title: { type: String, required: true },

    // 文章关键字 (SEO)
    keywords: [{ type: String }],

    // 描述
    description: { type: String },

    // 分类
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
      required: true,
    },

    // 缩略图
    thumbnail: { type: String, default: "" },

    // 正文
    content: { type: String, required: true },

    // 文章发布状态 => -1 回收站，0 草稿，1 已发布
    status: { type: Number, default: PUBLISH_STATE.published },

    // 标签
    tags: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Tag",
      },
    ],

    // 是否置顶 => 0 首页不展示，1 首页展示
    is_top: {
      type: Number,
      default: 0,
    },

    // 评论数据
    comments: { type: Number, default: 0 },

    // 访问量
    views: { type: Number, default: 0 },

    // 点赞数
    likes: { type: Number, default: 0 },

    // 创建时间
    created_time: {
      type: Date,
      default: Date.now,
    },

    // 修改日期
    updated_time: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: {
      createdAt: "created_time",
      updatedAt: "updated_time",
    },
  }
);

// 翻页 + 自增 ID 插件配置
articleSchema.plugin(mongoosePaginate);
articleSchema.plugin(autoIncrement.plugin, {
  model: "Article",
  field: "id",
  startAt: 1,
  incrementBy: 1,
});

module.exports = mongoose.model("Article", articleSchema);
