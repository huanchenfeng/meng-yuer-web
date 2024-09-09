<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="BUFF平台饰品ID" prop="buffId">
        <el-input
          v-model="queryParams.buffId"
          placeholder="请输入BUFF平台饰品ID"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="BUFF在售价" prop="buffSellPrice">
        <el-input
          v-model="queryParams.buffSellPrice"
          placeholder="请输入BUFF在售价"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="BUFF在售数量" prop="buffSellNum">
        <el-input
          v-model="queryParams.buffSellNum"
          placeholder="请输入BUFF在售数量"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="BUFF求购价" prop="buffBuyPrice">
        <el-input
          v-model="queryParams.buffBuyPrice"
          placeholder="请输入BUFF求购价"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="BUFF求购数量" prop="buffBuyNum">
        <el-input
          v-model="queryParams.buffBuyNum"
          placeholder="请输入BUFF求购数量"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="Steam在售价" prop="steamSellPrice">
        <el-input
          v-model="queryParams.steamSellPrice"
          placeholder="请输入Steam在售价"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="Steam在售数量" prop="steamSellNum">
        <el-input
          v-model="queryParams.steamSellNum"
          placeholder="请输入Steam在售数量"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="Steam求购价" prop="steamBuyPrice">
        <el-input
          v-model="queryParams.steamBuyPrice"
          placeholder="请输入Steam求购价"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="Steam求购数量" prop="steamBuyNum">
        <el-input
          v-model="queryParams.steamBuyNum"
          placeholder="请输入Steam求购数量"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="Steam市场名称" prop="marketHashName">
        <el-input
          v-model="queryParams.marketHashName"
          placeholder="请输入Steam市场名称"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="饰品中文名称" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入饰品中文名称"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="饰品图片" prop="img">
        <el-input
          v-model="queryParams.img"
          placeholder="请输入饰品图片"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="YYYP平台饰品ID" prop="yyypId">
        <el-input
          v-model="queryParams.yyypId"
          placeholder="请输入YYYP平台饰品ID"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="YYYP在售价" prop="yyypSellPrice">
        <el-input
          v-model="queryParams.yyypSellPrice"
          placeholder="请输入YYYP在售价"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="YYYP在售数量" prop="yyypSellNum">
        <el-input
          v-model="queryParams.yyypSellNum"
          placeholder="请输入YYYP在售数量"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="YYYP求购价" prop="yyypBuyPrice">
        <el-input
          v-model="queryParams.yyypBuyPrice"
          placeholder="请输入YYYP求购价"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="YYYP求购数量" prop="yyypBuyNum">
        <el-input
          v-model="queryParams.yyypBuyNum"
          placeholder="请输入YYYP求购数量"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="平台价格最大值" prop="maxPrice">
        <el-input
          v-model="queryParams.maxPrice"
          placeholder="请输入平台价格最大值"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="Steam当日成交量" prop="turnoverNumber">
        <el-input
          v-model="queryParams.turnoverNumber"
          placeholder="请输入Steam当日成交量"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="Steam平台ID" prop="steamId">
        <el-input
          v-model="queryParams.steamId"
          placeholder="请输入Steam平台ID"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="Plus"
          @click="handleAdd"
          v-hasPermi="['system:accessories:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="Edit"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:accessories:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="Delete"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:accessories:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="Download"
          @click="handleExport"
          v-hasPermi="['system:accessories:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="accessoriesList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="饰品ID" align="center" prop="id" />
      <el-table-column label="BUFF平台饰品ID" align="center" prop="buffId" />
      <el-table-column label="BUFF在售价" align="center" prop="buffSellPrice" />
      <el-table-column label="BUFF在售数量" align="center" prop="buffSellNum" />
      <el-table-column label="BUFF求购价" align="center" prop="buffBuyPrice" />
      <el-table-column label="BUFF求购数量" align="center" prop="buffBuyNum" />
      <el-table-column label="Steam在售价" align="center" prop="steamSellPrice" />
      <el-table-column label="Steam在售数量" align="center" prop="steamSellNum" />
      <el-table-column label="Steam求购价" align="center" prop="steamBuyPrice" />
      <el-table-column label="Steam求购数量" align="center" prop="steamBuyNum" />
      <el-table-column label="Steam市场名称" align="center" prop="marketHashName" />
      <el-table-column label="饰品中文名称" align="center" prop="name" />
      <el-table-column label="饰品图片" align="center" prop="img" />
      <el-table-column label="YYYP平台饰品ID" align="center" prop="yyypId" />
      <el-table-column label="YYYP在售价" align="center" prop="yyypSellPrice" />
      <el-table-column label="YYYP在售数量" align="center" prop="yyypSellNum" />
      <el-table-column label="YYYP求购价" align="center" prop="yyypBuyPrice" />
      <el-table-column label="YYYP求购数量" align="center" prop="yyypBuyNum" />
      <el-table-column label="平台价格最大值" align="center" prop="maxPrice" />
      <el-table-column label="Steam当日成交量" align="center" prop="turnoverNumber" />
      <el-table-column label="Steam平台ID" align="center" prop="steamId" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template #default="scope">
          <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['system:accessories:edit']">修改</el-button>
          <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['system:accessories:remove']">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <pagination
      v-show="total>0"
      :total="total"
      v-model:page="queryParams.pageNum"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改饰品信息对话框 -->
    <el-dialog :title="title" v-model="open" width="500px" append-to-body>
      <el-form ref="accessoriesRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="BUFF平台饰品ID" prop="buffId">
          <el-input v-model="form.buffId" placeholder="请输入BUFF平台饰品ID" />
        </el-form-item>
        <el-form-item label="BUFF在售价" prop="buffSellPrice">
          <el-input v-model="form.buffSellPrice" placeholder="请输入BUFF在售价" />
        </el-form-item>
        <el-form-item label="BUFF在售数量" prop="buffSellNum">
          <el-input v-model="form.buffSellNum" placeholder="请输入BUFF在售数量" />
        </el-form-item>
        <el-form-item label="BUFF求购价" prop="buffBuyPrice">
          <el-input v-model="form.buffBuyPrice" placeholder="请输入BUFF求购价" />
        </el-form-item>
        <el-form-item label="BUFF求购数量" prop="buffBuyNum">
          <el-input v-model="form.buffBuyNum" placeholder="请输入BUFF求购数量" />
        </el-form-item>
        <el-form-item label="Steam在售价" prop="steamSellPrice">
          <el-input v-model="form.steamSellPrice" placeholder="请输入Steam在售价" />
        </el-form-item>
        <el-form-item label="Steam在售数量" prop="steamSellNum">
          <el-input v-model="form.steamSellNum" placeholder="请输入Steam在售数量" />
        </el-form-item>
        <el-form-item label="Steam求购价" prop="steamBuyPrice">
          <el-input v-model="form.steamBuyPrice" placeholder="请输入Steam求购价" />
        </el-form-item>
        <el-form-item label="Steam求购数量" prop="steamBuyNum">
          <el-input v-model="form.steamBuyNum" placeholder="请输入Steam求购数量" />
        </el-form-item>
        <el-form-item label="Steam市场名称" prop="marketHashName">
          <el-input v-model="form.marketHashName" placeholder="请输入Steam市场名称" />
        </el-form-item>
        <el-form-item label="饰品中文名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入饰品中文名称" />
        </el-form-item>
        <el-form-item label="饰品图片" prop="img">
          <el-input v-model="form.img" placeholder="请输入饰品图片" />
        </el-form-item>
        <el-form-item label="YYYP平台饰品ID" prop="yyypId">
          <el-input v-model="form.yyypId" placeholder="请输入YYYP平台饰品ID" />
        </el-form-item>
        <el-form-item label="YYYP在售价" prop="yyypSellPrice">
          <el-input v-model="form.yyypSellPrice" placeholder="请输入YYYP在售价" />
        </el-form-item>
        <el-form-item label="YYYP在售数量" prop="yyypSellNum">
          <el-input v-model="form.yyypSellNum" placeholder="请输入YYYP在售数量" />
        </el-form-item>
        <el-form-item label="YYYP求购价" prop="yyypBuyPrice">
          <el-input v-model="form.yyypBuyPrice" placeholder="请输入YYYP求购价" />
        </el-form-item>
        <el-form-item label="YYYP求购数量" prop="yyypBuyNum">
          <el-input v-model="form.yyypBuyNum" placeholder="请输入YYYP求购数量" />
        </el-form-item>
        <el-form-item label="平台价格最大值" prop="maxPrice">
          <el-input v-model="form.maxPrice" placeholder="请输入平台价格最大值" />
        </el-form-item>
        <el-form-item label="Steam当日成交量" prop="turnoverNumber">
          <el-input v-model="form.turnoverNumber" placeholder="请输入Steam当日成交量" />
        </el-form-item>
        <el-form-item label="Steam平台ID" prop="steamId">
          <el-input v-model="form.steamId" placeholder="请输入Steam平台ID" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="Accessories">
import { listAccessories, getAccessories, delAccessories, addAccessories, updateAccessories } from "@/api/system/accessories";

const { proxy } = getCurrentInstance();

const accessoriesList = ref([]);
const open = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);
const title = ref("");

const data = reactive({
  form: {},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    buffId: null,
    buffSellPrice: null,
    buffSellNum: null,
    buffBuyPrice: null,
    buffBuyNum: null,
    steamSellPrice: null,
    steamSellNum: null,
    steamBuyPrice: null,
    steamBuyNum: null,
    marketHashName: null,
    name: null,
    img: null,
    yyypId: null,
    yyypSellPrice: null,
    yyypSellNum: null,
    yyypBuyPrice: null,
    yyypBuyNum: null,
    maxPrice: null,
    turnoverNumber: null,
    steamId: null
  },
  rules: {
    buffId: [
      { required: true, message: "BUFF平台饰品ID不能为空", trigger: "blur" }
    ],
    buffSellPrice: [
      { required: true, message: "BUFF在售价不能为空", trigger: "blur" }
    ],
    buffSellNum: [
      { required: true, message: "BUFF在售数量不能为空", trigger: "blur" }
    ],
    buffBuyPrice: [
      { required: true, message: "BUFF求购价不能为空", trigger: "blur" }
    ],
    buffBuyNum: [
      { required: true, message: "BUFF求购数量不能为空", trigger: "blur" }
    ],
    steamSellPrice: [
      { required: true, message: "Steam在售价不能为空", trigger: "blur" }
    ],
    steamSellNum: [
      { required: true, message: "Steam在售数量不能为空", trigger: "blur" }
    ],
    steamBuyPrice: [
      { required: true, message: "Steam求购价不能为空", trigger: "blur" }
    ],
    steamBuyNum: [
      { required: true, message: "Steam求购数量不能为空", trigger: "blur" }
    ],
    marketHashName: [
      { required: true, message: "Steam市场名称不能为空", trigger: "blur" }
    ],
    name: [
      { required: true, message: "饰品中文名称不能为空", trigger: "blur" }
    ],
    img: [
      { required: true, message: "饰品图片不能为空", trigger: "blur" }
    ],
    yyypId: [
      { required: true, message: "YYYP平台饰品ID不能为空", trigger: "blur" }
    ],
    yyypSellPrice: [
      { required: true, message: "YYYP在售价不能为空", trigger: "blur" }
    ],
    yyypSellNum: [
      { required: true, message: "YYYP在售数量不能为空", trigger: "blur" }
    ],
    yyypBuyPrice: [
      { required: true, message: "YYYP求购价不能为空", trigger: "blur" }
    ],
    yyypBuyNum: [
      { required: true, message: "YYYP求购数量不能为空", trigger: "blur" }
    ],
    maxPrice: [
      { required: true, message: "平台价格最大值不能为空", trigger: "blur" }
    ],
    turnoverNumber: [
      { required: true, message: "Steam当日成交量不能为空", trigger: "blur" }
    ],
  }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询饰品信息列表 */
function getList() {
  loading.value = true;
  listAccessories(queryParams.value).then(response => {
    accessoriesList.value = response.data;
    total.value = response.total;
    loading.value = false;
  });
}

// 取消按钮
function cancel() {
  open.value = false;
  reset();
}

// 表单重置
function reset() {
  form.value = {
    id: null,
    buffId: null,
    buffSellPrice: null,
    buffSellNum: null,
    buffBuyPrice: null,
    buffBuyNum: null,
    steamSellPrice: null,
    steamSellNum: null,
    steamBuyPrice: null,
    steamBuyNum: null,
    marketHashName: null,
    name: null,
    img: null,
    yyypId: null,
    yyypSellPrice: null,
    yyypSellNum: null,
    yyypBuyPrice: null,
    yyypBuyNum: null,
    maxPrice: null,
    turnoverNumber: null,
    steamId: null
  };
  proxy.resetForm("accessoriesRef");
}

/** 搜索按钮操作 */
function handleQuery() {
  queryParams.value.pageNum = 1;
  getList();
}

/** 重置按钮操作 */
function resetQuery() {
  proxy.resetForm("queryRef");
  handleQuery();
}

// 多选框选中数据
function handleSelectionChange(selection) {
  ids.value = selection.map(item => item.id);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

/** 新增按钮操作 */
function handleAdd() {
  reset();
  open.value = true;
  title.value = "添加饰品信息";
}

/** 修改按钮操作 */
function handleUpdate(row) {
  reset();
  const _id = row.id || ids.value
  getAccessories(_id).then(response => {
    form.value = response.data;
    open.value = true;
    title.value = "修改饰品信息";
  });
}

/** 提交按钮 */
function submitForm() {
  proxy.$refs["accessoriesRef"].validate(valid => {
    if (valid) {
      if (form.value.id != null) {
        updateAccessories(form.value).then(response => {
          proxy.$modal.msgSuccess("修改成功");
          open.value = false;
          getList();
        });
      } else {
        addAccessories(form.value).then(response => {
          proxy.$modal.msgSuccess("新增成功");
          open.value = false;
          getList();
        });
      }
    }
  });
}

/** 删除按钮操作 */
function handleDelete(row) {
  const _ids = row.id || ids.value;
  proxy.$modal.confirm('是否确认删除饰品信息编号为"' + _ids + '"的数据项？').then(function() {
    return delAccessories(_ids);
  }).then(() => {
    getList();
    proxy.$modal.msgSuccess("删除成功");
  }).catch(() => {});
}

/** 导出按钮操作 */
function handleExport() {
  proxy.download('system/accessories/export', {
    ...queryParams.value
  }, `accessories_${new Date().getTime()}.xlsx`)
}

getList();
</script>
