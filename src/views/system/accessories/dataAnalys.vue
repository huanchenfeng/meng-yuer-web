<template>
    <div class="app-container">
        <el-form :model="form" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
  <el-form-item label="类型" prop="type">
    <el-input
      v-model=queryParams.type  
      type="number"                     
      placeholder="请输入类型"
      clearable
      @keyup.enter="handleQuery"
    />
  </el-form-item>
  <el-form-item>
    <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
    <el-button icon="Refresh" @click="resetQuery">重置</el-button>
  </el-form-item>
</el-form>

  
      <el-table v-loading="loading" :data="accessoriesList" @selection-change="handleSelectionChange">
  <el-table-column label="饰品中文名称" align="center" prop="name" />
  <el-table-column label="比例(求购/在售)" align="center" prop="purchaseToSellRatio" />
  <el-table-column label="比例(求购/求购)" align="center" prop="purchaseToPurchaseRatio" />
  <el-table-column label="比例(在售/求购)" align="center" prop="sellToPurchaseRatio" />
  <el-table-column label="比例(在售/在售)" align="center" prop="sellToSellRatio" />
  <el-table-column label="Steam售价" align="center" prop="steamSellPrice" />
  <el-table-column label="BUFF售价" align="center" prop="buffSellPrice" />
  <el-table-column label="YYYP售价" align="center" prop="yyypSellPrice" />
  <el-table-column label="BUFF求购价" align="center" prop="buffBuyPrice" />
  <el-table-column label="YYYP求购价" align="center" prop="yyypBuyPrice" />
  <el-table-column label="Steam求购价" align="center" prop="steamBuyPrice" />

  <!-- BUFF链接列 -->
  <el-table-column label="BUFF链接" align="center">
    <template v-slot="scope">
      <a :href="scope.row.buffLink" target="_blank">BUFF</a>
    </template>
  </el-table-column>

  <!-- YYYP链接列 -->
  <el-table-column label="YYYP链接" align="center">
    <template v-slot="scope">
      <a :href="scope.row.yyypLink" target="_blank">YYYP</a>
    </template>
  </el-table-column>

  <!-- Steam链接列 -->
  <el-table-column label="Steam链接" align="center">
    <template v-slot="scope">
      <a :href="scope.row.steamLink" target="_blank">Steam</a>
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
    </div>
  </template>
  
  <script setup name="Accessories">
  import { dataAnalys } from "@/api/system/accessories";
  const { proxy } = getCurrentInstance();
  
  const accessoriesList = ref([]);
  const loading = ref(true);
  const showSearch = ref(true);
  const total = ref(0);
  
  const data = reactive({
    form: {}
    
  });
  
  const { form } = toRefs(data);
// 初始化 queryParams
const queryParams = ref({
  pageNum: 1,
  pageSize: 10,
  type: 1 // 设置默认值为 1
});
  /** 查询饰品信息列表 */
  function getdataAnalys() {
    loading.value = true;
    dataAnalys(queryParams.value).then(response => {
      accessoriesList.value = response.rows;
      total.value = response.total;
      loading.value = false;
    });
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
  // 确保 queryParams.type 是数字
    queryParams.pageNum = 1;
    getdataAnalys();
  
  }
  getdataAnalys();
  </script>
  