// 专题图谱数据（策展式）：展现某一领域内项目的演进脉络与关系
// 与 /graph 的自动派生图不同，这里的关系（启发/取代/衍生/竞争）由人工策展，
// 以呈现"技术家族树/谱系"。projectId 若存在则可点击跳转到对应项目卡片。

export type Relation = '启发' | '取代' | '衍生' | '竞争' | '演进' | '基于';

export interface TopicNode {
  id: string;
  name: string;
  year: number;
  group: string; // 用于分组着色与纵向泳道
  desc?: string;
  projectId?: string; // 对应 /projects/<id> 的卡片
}

export interface TopicLink {
  source: string;
  target: string;
  relation: Relation;
}

export interface TopicMap {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  groups: string[];
  nodes: TopicNode[];
  links: TopicLink[];
}

export const topicMaps: TopicMap[] = [
  // ============ 前端框架族谱 ============
  {
    slug: 'frontend',
    title: '前端框架族谱',
    icon: '⚛️',
    summary:
      '从 jQuery 到 React/Vue 再到编译式新秀，一张图看懂前端框架二十年的血缘与更替。',
    groups: ['DOM 时代', '第一代框架', '组件化框架', '编译式新秀', '元框架'],
    nodes: [
      { id: 'jquery', name: 'jQuery', year: 2006, group: 'DOM 时代', desc: '简化 DOM 操作，前端库鼻祖', projectId: 'jquery' },
      { id: 'backbone', name: 'Backbone.js', year: 2010, group: '第一代框架', desc: '最早的前端 MVC', projectId: 'backbone' },
      { id: 'angularjs', name: 'AngularJS', year: 2010, group: '第一代框架', desc: 'Google 双向绑定框架', projectId: 'angularjs' },
      { id: 'ember', name: 'Ember.js', year: 2011, group: '第一代框架', desc: '约定优于配置', projectId: 'ember' },
      { id: 'react', name: 'React', year: 2013, group: '组件化框架', desc: '虚拟 DOM + 组件化革命', projectId: 'react' },
      { id: 'vue', name: 'Vue.js', year: 2014, group: '组件化框架', desc: '渐进式框架', projectId: 'vue' },
      { id: 'preact', name: 'Preact', year: 2015, group: '组件化框架', desc: '3kB 的 React 替代', projectId: 'preact' },
      { id: 'angular2', name: 'Angular 2+', year: 2016, group: '组件化框架', desc: 'TypeScript 重写', projectId: 'angular' },
      { id: 'svelte', name: 'Svelte', year: 2016, group: '编译式新秀', desc: '编译时框架，无运行时', projectId: 'svelte' },
      { id: 'solid', name: 'SolidJS', year: 2020, group: '编译式新秀', desc: '精细响应式，无虚拟 DOM', projectId: 'solidjs' },
      { id: 'qwik', name: 'Qwik', year: 2022, group: '编译式新秀', desc: '可恢复性，极致首屏', projectId: 'qwik' },
      { id: 'nextjs', name: 'Next.js', year: 2016, group: '元框架', desc: 'React 全栈框架', projectId: 'nextjs' },
      { id: 'nuxt', name: 'Nuxt', year: 2016, group: '元框架', desc: 'Vue 全栈框架', projectId: 'nuxt' },
      { id: 'astro', name: 'Astro', year: 2021, group: '元框架', desc: '内容优先，本站所用', projectId: 'astro' },
    ],
    links: [
      { source: 'jquery', target: 'backbone', relation: '启发' },
      { source: 'jquery', target: 'angularjs', relation: '启发' },
      { source: 'backbone', target: 'angularjs', relation: '竞争' },
      { source: 'backbone', target: 'ember', relation: '启发' },
      { source: 'angularjs', target: 'react', relation: '启发' },
      { source: 'angularjs', target: 'vue', relation: '启发' },
      { source: 'react', target: 'vue', relation: '竞争' },
      { source: 'react', target: 'preact', relation: '衍生' },
      { source: 'angularjs', target: 'angular2', relation: '演进' },
      { source: 'react', target: 'svelte', relation: '启发' },
      { source: 'react', target: 'solid', relation: '启发' },
      { source: 'svelte', target: 'solid', relation: '竞争' },
      { source: 'solid', target: 'qwik', relation: '启发' },
      { source: 'react', target: 'nextjs', relation: '基于' },
      { source: 'vue', target: 'nuxt', relation: '基于' },
      { source: 'react', target: 'astro', relation: '基于' },
    ],
  },

  // ============ 大数据谱系图 ============
  {
    slug: 'bigdata',
    title: '大数据谱系图',
    icon: '🗄️',
    summary:
      '从 Google 三篇论文到 Hadoop 生态，再到 Spark/Flink 的流批演进，梳理大数据技术的家谱。',
    groups: ['理论源头', '存储', '批计算', '流计算', '消息', '数据湖'],
    nodes: [
      { id: 'gfs', name: 'Google 论文', year: 2004, group: '理论源头', desc: 'GFS/MapReduce/BigTable 三篇论文' },
      { id: 'hadoop', name: 'Hadoop', year: 2006, group: '批计算', desc: '大数据开创者', projectId: 'hadoop' },
      { id: 'hdfs', name: 'HDFS', year: 2006, group: '存储', desc: '分布式文件系统' },
      { id: 'hbase', name: 'HBase', year: 2008, group: '存储', desc: 'Hadoop 上的 NoSQL', projectId: 'hbase' },
      { id: 'hive', name: 'Hive', year: 2010, group: '批计算', desc: 'SQL on Hadoop', projectId: 'hive' },
      { id: 'kafka', name: 'Kafka', year: 2011, group: '消息', desc: '分布式事件流平台', projectId: 'kafka' },
      { id: 'spark', name: 'Spark', year: 2014, group: '批计算', desc: '内存计算引擎', projectId: 'spark' },
      { id: 'flink', name: 'Flink', year: 2014, group: '流计算', desc: '流批一体引擎', projectId: 'flink' },
      { id: 'storm', name: 'Storm', year: 2014, group: '流计算', desc: '早期实时流处理', projectId: 'storm' },
      { id: 'iceberg', name: 'Iceberg', year: 2018, group: '数据湖', desc: '开放表格式', projectId: 'iceberg' },
    ],
    links: [
      { source: 'gfs', target: 'hadoop', relation: '启发' },
      { source: 'hadoop', target: 'hdfs', relation: '基于' },
      { source: 'hadoop', target: 'hbase', relation: '衍生' },
      { source: 'hadoop', target: 'hive', relation: '衍生' },
      { source: 'hadoop', target: 'spark', relation: '取代' },
      { source: 'hdfs', target: 'hbase', relation: '基于' },
      { source: 'storm', target: 'flink', relation: '取代' },
      { source: 'spark', target: 'flink', relation: '竞争' },
      { source: 'kafka', target: 'flink', relation: '启发' },
      { source: 'hive', target: 'iceberg', relation: '演进' },
      { source: 'spark', target: 'iceberg', relation: '基于' },
    ],
  },

  // ============ AI 大模型生态图 ============
  {
    slug: 'ai',
    title: 'AI 大模型生态图',
    icon: '🤖',
    summary:
      '从 Transformer 论文到大模型、推理引擎、应用框架与向量库，鸟瞰当下最火的 AI 开源生态。',
    groups: ['理论/模型', '深度学习框架', '推理与运行', '应用框架', '向量/AIGC'],
    nodes: [
      { id: 'transformer', name: 'Transformer 论文', year: 2017, group: '理论/模型', desc: 'Attention Is All You Need' },
      { id: 'tensorflow', name: 'TensorFlow', year: 2015, group: '深度学习框架', desc: 'Google 深度学习框架', projectId: 'tensorflow' },
      { id: 'pytorch', name: 'PyTorch', year: 2016, group: '深度学习框架', desc: '研究首选，动态图', projectId: 'pytorch' },
      { id: 'transformers', name: 'Transformers', year: 2018, group: '理论/模型', desc: 'HF 模型库', projectId: 'transformers' },
      { id: 'llama', name: 'LLaMA', year: 2023, group: '理论/模型', desc: 'Meta 开源大模型', projectId: 'llama' },
      { id: 'llamacpp', name: 'llama.cpp', year: 2023, group: '推理与运行', desc: 'C++ 本地推理', projectId: 'llamacpp' },
      { id: 'ollama', name: 'Ollama', year: 2023, group: '推理与运行', desc: '一键本地跑 LLM', projectId: 'ollama' },
      { id: 'vllm', name: 'vLLM', year: 2023, group: '推理与运行', desc: '高吞吐推理引擎', projectId: 'vllm' },
      { id: 'langchain', name: 'LangChain', year: 2022, group: '应用框架', desc: 'LLM 应用框架', projectId: 'langchain' },
      { id: 'llamaindex', name: 'LlamaIndex', year: 2022, group: '应用框架', desc: 'RAG 数据框架', projectId: 'llamaindex' },
      { id: 'dify', name: 'Dify', year: 2023, group: '应用框架', desc: 'LLM 应用平台', projectId: 'dify' },
      { id: 'milvus', name: 'Milvus', year: 2019, group: '向量/AIGC', desc: '向量数据库', projectId: 'milvus' },
      { id: 'sd', name: 'Stable Diffusion', year: 2022, group: '向量/AIGC', desc: '开源图像生成模型', projectId: 'stable-diffusion' },
      { id: 'comfyui', name: 'ComfyUI', year: 2023, group: '向量/AIGC', desc: '节点式生成工作流', projectId: 'comfyui' },
    ],
    links: [
      { source: 'transformer', target: 'transformers', relation: '启发' },
      { source: 'transformer', target: 'llama', relation: '基于' },
      { source: 'pytorch', target: 'transformers', relation: '基于' },
      { source: 'tensorflow', target: 'pytorch', relation: '竞争' },
      { source: 'transformers', target: 'llama', relation: '基于' },
      { source: 'llama', target: 'llamacpp', relation: '衍生' },
      { source: 'llamacpp', target: 'ollama', relation: '基于' },
      { source: 'llama', target: 'vllm', relation: '基于' },
      { source: 'langchain', target: 'llamaindex', relation: '竞争' },
      { source: 'langchain', target: 'dify', relation: '启发' },
      { source: 'milvus', target: 'llamaindex', relation: '基于' },
      { source: 'llama', target: 'langchain', relation: '启发' },
      { source: 'transformer', target: 'sd', relation: '启发' },
      { source: 'sd', target: 'comfyui', relation: '基于' },
    ],
  },

  // ============ 数据库宇宙 ============
  {
    slug: 'database',
    title: '数据库宇宙',
    icon: '🗃️',
    summary:
      '从关系型到 NoSQL、NewSQL、分析型与向量库，梳理数据库四十年的分化与演进。',
    groups: ['关系型', 'NoSQL', 'NewSQL', '分析型', '向量/搜索'],
    nodes: [
      { id: 'mysql', name: 'MySQL', year: 1995, group: '关系型', desc: '最流行的开源关系库', projectId: 'mysql' },
      { id: 'postgresql', name: 'PostgreSQL', year: 1996, group: '关系型', desc: '最先进的开源关系库', projectId: 'postgresql' },
      { id: 'sqlite', name: 'SQLite', year: 2000, group: '关系型', desc: '嵌入式单文件数据库', projectId: 'sqlite' },
      { id: 'cassandra', name: 'Cassandra', year: 2008, group: 'NoSQL', desc: '分布式宽列存储', projectId: 'cassandra' },
      { id: 'mongodb', name: 'MongoDB', year: 2009, group: 'NoSQL', desc: '文档数据库', projectId: 'mongodb' },
      { id: 'redis', name: 'Redis', year: 2009, group: 'NoSQL', desc: '内存 KV 存储', projectId: 'redis' },
      { id: 'es', name: 'Elasticsearch', year: 2010, group: '向量/搜索', desc: '搜索引擎', projectId: 'elasticsearch' },
      { id: 'cockroach', name: 'CockroachDB', year: 2015, group: 'NewSQL', desc: '分布式 SQL', projectId: 'cockroachdb' },
      { id: 'tidb', name: 'TiDB', year: 2015, group: 'NewSQL', desc: '国产分布式 NewSQL', projectId: 'tidb' },
      { id: 'clickhouse', name: 'ClickHouse', year: 2016, group: '分析型', desc: '列式 OLAP 数据库', projectId: 'clickhouse' },
      { id: 'duckdb', name: 'DuckDB', year: 2019, group: '分析型', desc: '嵌入式 OLAP', projectId: 'duckdb' },
      { id: 'milvus', name: 'Milvus', year: 2019, group: '向量/搜索', desc: '向量数据库', projectId: 'milvus' },
    ],
    links: [
      { source: 'mysql', target: 'postgresql', relation: '竞争' },
      { source: 'mysql', target: 'cockroach', relation: '启发' },
      { source: 'mysql', target: 'tidb', relation: '启发' },
      { source: 'postgresql', target: 'sqlite', relation: '启发' },
      { source: 'cassandra', target: 'mongodb', relation: '竞争' },
      { source: 'postgresql', target: 'cockroach', relation: '基于' },
      { source: 'cockroach', target: 'tidb', relation: '竞争' },
      { source: 'sqlite', target: 'duckdb', relation: '启发' },
      { source: 'clickhouse', target: 'duckdb', relation: '竞争' },
      { source: 'es', target: 'milvus', relation: '启发' },
      { source: 'redis', target: 'milvus', relation: '演进' },
    ],
  },

  // ============ 云原生全景 ============
  {
    slug: 'cloudnative',
    title: '云原生全景',
    icon: '☸️',
    summary:
      '以 Kubernetes 为中心，串联容器、编排、服务网格、可观测性与 GitOps 的云原生技术栈。',
    groups: ['容器运行时', '编排', '服务网格', '可观测性', 'GitOps/IaC'],
    nodes: [
      { id: 'prometheus', name: 'Prometheus', year: 2012, group: '可观测性', desc: '云原生监控', projectId: 'prometheus' },
      { id: 'etcd', name: 'etcd', year: 2013, group: '编排', desc: 'K8s 的大脑', projectId: 'etcd' },
      { id: 'docker', name: 'Docker', year: 2013, group: '容器运行时', desc: '容器化革命', projectId: 'docker' },
      { id: 'k8s', name: 'Kubernetes', year: 2014, group: '编排', desc: '容器编排标准', projectId: 'kubernetes' },
      { id: 'terraform', name: 'Terraform', year: 2014, group: 'GitOps/IaC', desc: '基础设施即代码', projectId: 'terraform' },
      { id: 'grafana', name: 'Grafana', year: 2014, group: '可观测性', desc: '可视化仪表盘', projectId: 'grafana' },
      { id: 'helm', name: 'Helm', year: 2015, group: '编排', desc: 'K8s 包管理', projectId: 'helm' },
      { id: 'containerd', name: 'containerd', year: 2016, group: '容器运行时', desc: '工业标准运行时', projectId: 'containerd' },
      { id: 'envoy', name: 'Envoy', year: 2016, group: '服务网格', desc: '高性能代理', projectId: 'envoy' },
      { id: 'istio', name: 'Istio', year: 2017, group: '服务网格', desc: '服务网格', projectId: 'istio' },
      { id: 'argocd', name: 'Argo CD', year: 2018, group: 'GitOps/IaC', desc: 'GitOps 交付', projectId: 'argocd' },
    ],
    links: [
      { source: 'docker', target: 'containerd', relation: '衍生' },
      { source: 'docker', target: 'k8s', relation: '启发' },
      { source: 'containerd', target: 'k8s', relation: '基于' },
      { source: 'etcd', target: 'k8s', relation: '基于' },
      { source: 'k8s', target: 'helm', relation: '衍生' },
      { source: 'k8s', target: 'istio', relation: '衍生' },
      { source: 'envoy', target: 'istio', relation: '基于' },
      { source: 'k8s', target: 'prometheus', relation: '启发' },
      { source: 'prometheus', target: 'grafana', relation: '基于' },
      { source: 'k8s', target: 'argocd', relation: '衍生' },
      { source: 'terraform', target: 'k8s', relation: '竞争' },
    ],
  },

  // ============ 编程语言演化树 ============
  {
    slug: 'languages',
    title: '编程语言演化树',
    icon: '🌳',
    summary:
      '从 C/C++ 到脚本语言，再到 Go/Rust/TypeScript，梳理主流语言的血缘与影响关系。',
    groups: ['系统级', 'JVM/企业', '脚本动态', '现代静态', '前端/Web'],
    nodes: [
      { id: 'c', name: 'C', year: 1972, group: '系统级', desc: '系统编程之母', projectId: 'c' },
      { id: 'cpp', name: 'C++', year: 1985, group: '系统级', desc: 'C 的面向对象扩展', projectId: 'cpp' },
      { id: 'python', name: 'Python', year: 1991, group: '脚本动态', desc: 'AI 时代第一语言', projectId: 'python' },
      { id: 'java', name: 'Java', year: 1995, group: 'JVM/企业', desc: '企业级跨平台', projectId: 'java' },
      { id: 'js', name: 'JavaScript', year: 1995, group: '前端/Web', desc: 'Web 的语言', projectId: 'javascript' },
      { id: 'ruby', name: 'Ruby', year: 1995, group: '脚本动态', desc: '优雅的脚本语言', projectId: 'ruby' },
      { id: 'go', name: 'Go', year: 2009, group: '现代静态', desc: '云原生通用语', projectId: 'go' },
      { id: 'rust', name: 'Rust', year: 2010, group: '现代静态', desc: '内存安全系统语言', projectId: 'rust' },
      { id: 'kotlin', name: 'Kotlin', year: 2011, group: 'JVM/企业', desc: 'JVM 现代语言', projectId: 'kotlin' },
      { id: 'ts', name: 'TypeScript', year: 2012, group: '前端/Web', desc: 'JS 超集', projectId: 'typescript' },
      { id: 'swift', name: 'Swift', year: 2014, group: '现代静态', desc: 'Apple 平台语言', projectId: 'swift' },
    ],
    links: [
      { source: 'c', target: 'cpp', relation: '演进' },
      { source: 'c', target: 'go', relation: '启发' },
      { source: 'cpp', target: 'java', relation: '启发' },
      { source: 'cpp', target: 'rust', relation: '启发' },
      { source: 'c', target: 'python', relation: '基于' },
      { source: 'java', target: 'kotlin', relation: '演进' },
      { source: 'java', target: 'js', relation: '启发' },
      { source: 'js', target: 'ts', relation: '演进' },
      { source: 'ruby', target: 'go', relation: '竞争' },
      { source: 'cpp', target: 'swift', relation: '启发' },
      { source: 'python', target: 'go', relation: '竞争' },
    ],
  },

  // ============ JS 运行时与工具链之争 ============
  {
    slug: 'jsruntime',
    title: 'JS 运行时与工具链之争',
    icon: '🟨',
    summary:
      '从 Node.js 到 Deno/Bun，从 Webpack 到 Vite/esbuild，看 JavaScript 运行时与构建工具的更替。',
    groups: ['运行时', '打包器', '编译/引擎', '包管理'],
    nodes: [
      { id: 'nodejs', name: 'Node.js', year: 2009, group: '运行时', desc: '服务端 JS 开山作', projectId: 'nodejs' },
      { id: 'npm', name: 'npm', year: 2010, group: '包管理', desc: 'JS 包管理标准', projectId: 'npm' },
      { id: 'webpack', name: 'Webpack', year: 2014, group: '打包器', desc: '模块打包器之王', projectId: 'webpack' },
      { id: 'ts', name: 'TypeScript', year: 2012, group: '编译/引擎', desc: 'JS 超集', projectId: 'typescript' },
      { id: 'rollup', name: 'Rollup', year: 2015, group: '打包器', desc: 'ESM 打包器', projectId: 'rollup' },
      { id: 'esbuild', name: 'esbuild', year: 2020, group: '编译/引擎', desc: 'Go 极速打包', projectId: 'esbuild' },
      { id: 'deno', name: 'Deno', year: 2018, group: '运行时', desc: 'Node 之父重来', projectId: 'deno' },
      { id: 'vite', name: 'Vite', year: 2020, group: '打包器', desc: '极速开发服务器', projectId: 'vite' },
      { id: 'bun', name: 'Bun', year: 2022, group: '运行时', desc: '一体化运行时', projectId: 'bun' },
    ],
    links: [
      { source: 'nodejs', target: 'npm', relation: '衍生' },
      { source: 'nodejs', target: 'webpack', relation: '启发' },
      { source: 'webpack', target: 'rollup', relation: '竞争' },
      { source: 'rollup', target: 'vite', relation: '基于' },
      { source: 'esbuild', target: 'vite', relation: '基于' },
      { source: 'webpack', target: 'esbuild', relation: '取代' },
      { source: 'nodejs', target: 'deno', relation: '演进' },
      { source: 'nodejs', target: 'bun', relation: '竞争' },
      { source: 'deno', target: 'bun', relation: '竞争' },
      { source: 'ts', target: 'esbuild', relation: '启发' },
    ],
  },

  // ============ 可观测性体系 ============
  {
    slug: 'observability',
    title: '可观测性体系',
    icon: '📈',
    summary:
      '指标、日志、追踪三大支柱，以及 OpenTelemetry 统一采集标准，构成云原生可观测性全景。',
    groups: ['指标', '日志', '追踪', '可视化', '采集标准'],
    nodes: [
      { id: 'prometheus', name: 'Prometheus', year: 2012, group: '指标', desc: '云原生监控标准', projectId: 'prometheus' },
      { id: 'zipkin', name: 'Zipkin', year: 2012, group: '追踪', desc: 'Twitter 链路追踪', projectId: 'zipkin' },
      { id: 'grafana', name: 'Grafana', year: 2014, group: '可视化', desc: '可视化仪表盘', projectId: 'grafana' },
      { id: 'elk', name: 'ELK Stack', year: 2010, group: '日志', desc: 'Elasticsearch 日志方案', projectId: 'elasticsearch' },
      { id: 'jaeger', name: 'Jaeger', year: 2016, group: '追踪', desc: '分布式追踪', projectId: 'jaeger' },
      { id: 'loki', name: 'Loki', year: 2018, group: '日志', desc: '标签索引日志', projectId: 'loki' },
      { id: 'otel', name: 'OpenTelemetry', year: 2019, group: '采集标准', desc: '统一遥测标准', projectId: 'opentelemetry' },
    ],
    links: [
      { source: 'prometheus', target: 'grafana', relation: '基于' },
      { source: 'loki', target: 'grafana', relation: '基于' },
      { source: 'jaeger', target: 'grafana', relation: '基于' },
      { source: 'zipkin', target: 'jaeger', relation: '启发' },
      { source: 'elk', target: 'loki', relation: '启发' },
      { source: 'prometheus', target: 'loki', relation: '启发' },
      { source: 'jaeger', target: 'otel', relation: '演进' },
      { source: 'prometheus', target: 'otel', relation: '演进' },
    ],
  },
];
