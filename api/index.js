var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 32,
      columnNumber: 52
    }, this), {
      onAllReady() {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        didError = !0, console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 70,
      columnNumber: 52
    }, this), {
      onShellReady() {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError(err) {
        reject(err);
      },
      onError(error) {
        didError = !0, console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-FE3IFWBB.css";

// app/utils/session.server.ts
var import_node2 = require("@remix-run/node"), sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    httpOnly: !0,
    name: "__session",
    path: "/",
    sameSite: "lax",
    secrets: ["ImSoS3cr3t"],
    secure: !1
  }
});
async function getSession(request) {
  return sessionStorage.getSession(request.headers.get("Cookie"));
}
async function logout(request) {
  let session = await getSession(request);
  throw (0, import_node2.redirect)("/login", { headers: { "Set-Cookie": await sessionStorage.destroySession(session) } });
}
var ONE_WEEK = 60 * 60 * 24 * 7;
async function createUserSession(request, email) {
  let session = await getSession(request);
  session.set("currentUser", { email, name: email.split("@")[0] });
  let cookie = await sessionStorage.commitSession(session, { maxAge: ONE_WEEK });
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": cookie
    }
  });
}
async function getUser(request) {
  return (await getSession(request)).get("currentUser");
}
async function ensureAuthenticated(request) {
  let user = await getUser(request);
  return user || logout(request);
}

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }], meta = () => ({
  charset: "utf-8",
  title: "Remix Ecommerce",
  description: "Produtos com pre\xE7os incr\xEDveis",
  viewport: "width=device-width,initial-scale=1"
});
async function loader({ request }) {
  return { user: await getUser(request) };
}
var Document = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
  lang: "en",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/root.tsx",
  lineNumber: 27,
  columnNumber: 5
}, this);
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Error"
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: error.message
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "The stack trace is:"
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
        children: error.stack
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// app/routes/category.tsx
var category_exports = {};
__export(category_exports, {
  default: () => Home,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react10 = require("@remix-run/react");

// app/components/container/container.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Container({ className, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `container mx-auto max-w-7xl px-4 xl:px-0 ${className}`,
    children
  }, void 0, !1, {
    fileName: "app/components/container/container.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

// app/components/header/header.tsx
var import_react6 = require("@remix-run/react"), import_react7 = require("react");

// app/components/filters/filters.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Filters() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    className: "mt-5 text-right",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
      className: "cursor-default appearance-none bg-none font-sans text-base",
      form: "search-form",
      name: "hitsPerPage",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
          value: "16",
          children: "16 produtos"
        }, void 0, !1, {
          fileName: "app/components/filters/filters.tsx",
          lineNumber: 11,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
          value: "24",
          children: "24 produtos"
        }, void 0, !1, {
          fileName: "app/components/filters/filters.tsx",
          lineNumber: 12,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
          value: "32",
          children: "32 produtos"
        }, void 0, !1, {
          fileName: "app/components/filters/filters.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/filters/filters.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/filters/filters.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/search/search.tsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Search({ formRef }) {
  let [params] = (0, import_react3.useSearchParams)(), query = params.get("query") || "";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Form, {
    action: "/",
    className: "w-full max-w-4xl",
    id: "search-form",
    ref: formRef,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
      autoComplete: "off",
      className: "border-radius h-14 w-full rounded-lg border-none px-5 py-2 text-xl text-gray-700 shadow-md outline-none focus:ring-4 focus:ring-indigo-600 md:h-16 md:text-3xl",
      defaultValue: query,
      id: "query",
      name: "query",
      placeholder: "O que deseja hoje?"
    }, void 0, !1, {
      fileName: "app/components/search/search.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/search/search.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/user/user.tsx
var import_react5 = require("@remix-run/react");

// app/hooks/useUser.ts
var import_react4 = require("@remix-run/react");
function useUser() {
  var _a, _b;
  return (_b = (_a = (0, import_react4.useMatches)().find((m) => (m == null ? void 0 : m.pathname) === "/")) == null ? void 0 : _a.data) == null ? void 0 : _b.user;
}

// app/components/user/user.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function User() {
  let user = useUser();
  return user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex gap-2 text-white",
    children: [
      "Ol\xE1, ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.NavLink, {
        to: "/account",
        children: user.name
      }, void 0, !1, {
        fileName: "app/components/user/user.tsx",
        lineNumber: 10,
        columnNumber: 12
      }, this),
      "\u2022",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.NavLink, {
        to: "/logout",
        children: "Sair"
      }, void 0, !1, {
        fileName: "app/components/user/user.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/user/user.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.NavLink, {
    className: "text-white",
    prefetch: "intent",
    to: "/login",
    children: "Login"
  }, void 0, !1, {
    fileName: "app/components/user/user.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/components/header/header.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Header() {
  let formRef = (0, import_react7.useRef)(null), submit = (0, import_react6.useSubmit)(), hasFilter = (0, import_react6.useLocation)().pathname === "/";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col",
    onChange: () => {
      formRef && submit(formRef.current, { replace: !0 });
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        className: "flex h-60 items-center bg-indigo-800 md:h-40",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
          className: "flex flex-col items-center justify-between gap-4 md:flex-row",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.NavLink, {
              className: "text-6xl font-semibold text-white",
              prefetch: "intent",
              to: "/",
              children: "\u26A1\uFE0F"
            }, void 0, !1, {
              fileName: "app/components/header/header.tsx",
              lineNumber: 25,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, {
              formRef
            }, void 0, !1, {
              fileName: "app/components/header/header.tsx",
              lineNumber: 28,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, {}, void 0, !1, {
              fileName: "app/components/header/header.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/header/header.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/header/header.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      hasFilter && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Filters, {}, void 0, !1, {
        fileName: "app/components/header/header.tsx",
        lineNumber: 32,
        columnNumber: 21
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/header/header.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/components/pagination/pagination.tsx
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Pagination() {
  let [params] = (0, import_react8.useSearchParams)(), query = Object.fromEntries(params.entries()), currentPage = Number(query.page || 0), goTo = (direction) => (query.page = String(direction === "prev" ? currentPage - 1 : currentPage + 1), `?${new URLSearchParams(query)}`);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex gap-2",
    children: [
      !!currentPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.NavLink, {
        className: "btn-primary",
        prefetch: "intent",
        to: goTo("prev"),
        children: "Anterior"
      }, void 0, !1, {
        fileName: "app/components/pagination/pagination.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.NavLink, {
        className: "btn-primary",
        prefetch: "intent",
        to: goTo("next"),
        children: "Pr\xF3xima"
      }, void 0, !1, {
        fileName: "app/components/pagination/pagination.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/pagination/pagination.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/components/showcase/showcase-item.tsx
var import_react9 = require("@remix-run/react");

// app/components/rating/rating.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), StarIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
  "aria-hidden": "true",
  className: "h-5 w-5 flex-shrink-0 text-gray-900",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg",
  ...props,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
    clipRule: "evenodd",
    d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z",
    fillRule: "evenodd"
  }, void 0, !1, {
    fileName: "app/components/rating/rating.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this)
}, void 0, !1, {
  fileName: "app/components/rating/rating.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this);
function Rating({ rating }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex",
    children: [0, 1, 2, 3, 4].map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StarIcon, {
      "aria-hidden": "true",
      className: `h-5 w-5 flex-shrink-0 ${rating < item ? "text-gray-200" : "text-gray-900"}`
    }, item, !1, {
      fileName: "app/components/rating/rating.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/components/rating/rating.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/components/showcase/showcase-item.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ShowcaseItem({ product, isLazy }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.NavLink, {
    className: "relative block cursor-pointer rounded-xl border border-gray-200 p-8 transition-all hover:border-gray-400",
    prefetch: "intent",
    to: `product/${product.objectID}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("picture", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          alt: product.description,
          className: "h-48 w-96 object-scale-down",
          height: "130",
          loading: isLazy ? "lazy" : void 0,
          src: product.image,
          width: "200"
        }, void 0, !1, {
          fileName: "app/components/showcase/showcase-item.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/showcase/showcase-item.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            className: "mt-6 text-lg text-gray-600 line-clamp-2",
            children: product.name
          }, void 0, !1, {
            fileName: "app/components/showcase/showcase-item.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: [
              "$",
              product.price
            ]
          }, void 0, !0, {
            fileName: "app/components/showcase/showcase-item.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Rating, {
            rating: product.rating
          }, void 0, !1, {
            fileName: "app/components/showcase/showcase-item.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/showcase/showcase-item.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/showcase/showcase-item.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/showcase/showcase.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Notfound = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "text-xl",
  children: "Oops! Nenhum termo encontrado"
}, void 0, !1, {
  fileName: "app/components/showcase/showcase.tsx",
  lineNumber: 8,
  columnNumber: 24
}, this);
function Showcase({ products }) {
  return products.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
    className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4",
    children: products.map((product, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShowcaseItem, {
      isLazy: i > 4,
      product
    }, product.objectID, !1, {
      fileName: "app/components/showcase/showcase.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/components/showcase/showcase.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Notfound, {}, void 0, !1, {
    fileName: "app/components/showcase/showcase.tsx",
    lineNumber: 11,
    columnNumber: 32
  }, this);
}

// app/models/search.server.ts
var import_algoliasearch = __toESM(require("algoliasearch")), client = (0, import_algoliasearch.default)("latency", "6be0576ff61c053d5f9a3225e2a90f76"), algolia = client.initIndex("instant_search");
async function search(query, options) {
  return await algolia.search(query, options);
}
async function getProduct(sku) {
  return await algolia.getObject(sku);
}
async function getCategory(filter) {
  return await algolia.searchForFacetValues("category", filter);
}

// app/routes/category.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader2({ request }) {
  let { category } = Object.fromEntries(new URL(request.url).searchParams), data = await getCategory(category);
  return (0, import_node3.json)(data);
}
function Home() {
  let data = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, !1, {
        fileName: "app/routes/category.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
        className: "my-10",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Showcase, {
            products: data.hits
          }, void 0, !1, {
            fileName: "app/routes/category.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, {}, void 0, !1, {
            fileName: "app/routes/category.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/category.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/category.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/account.tsx
var account_exports = {};
__export(account_exports, {
  default: () => Account,
  loader: () => loader3
});
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader3({ request }) {
  return await ensureAuthenticated(request), null;
}
var accountLinks = [
  { to: "", text: "Perfil" },
  { to: "address", text: "Endere\xE7os" },
  { to: "cards", text: "Cart\xF5es" },
  { to: "orders", text: "Pedidos" }
];
function Account() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, !1, {
        fileName: "app/routes/account.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
        className: "mt-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex w-44 flex-col gap-2",
              children: accountLinks.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.NavLink, {
                className: ({ isActive }) => `${isActive ? "font-bold text-indigo-600" : ""} hover:font-bold hover:text-indigo-600`,
                to: link.to,
                children: link.text
              }, link.to, !1, {
                fileName: "app/routes/account.tsx",
                lineNumber: 29,
                columnNumber: 15
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/account.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
              fileName: "app/routes/account.tsx",
              lineNumber: 40,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/account.tsx",
          lineNumber: 26,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/account.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/account.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/account/address.tsx
var address_exports = {};
__export(address_exports, {
  default: () => AddressPage
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AddressPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
    className: "flex flex-col gap-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      className: "text-2xl",
      children: "Meus endere\xE7os"
    }, void 0, !1, {
      fileName: "app/routes/account/address.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/account/address.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/account/orders.tsx
var orders_exports = {};
__export(orders_exports, {
  default: () => OrdersPage
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function OrdersPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
    className: "flex flex-col gap-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      className: "text-2xl",
      children: "Hist\xF3rico de pedidos"
    }, void 0, !1, {
      fileName: "app/routes/account/orders.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/account/orders.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/account/cards.tsx
var cards_exports = {};
__export(cards_exports, {
  default: () => CardsPage
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function CardsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
    className: "flex flex-col gap-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      className: "text-2xl",
      children: "Meus cart\xF5es"
    }, void 0, !1, {
      fileName: "app/routes/account/cards.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/account/cards.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/account/index.tsx
var account_exports2 = {};
__export(account_exports2, {
  default: () => Profile
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Profile() {
  let user = useUser();
  return user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
    className: "flex flex-col gap-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "text-2xl",
        children: "Perfil"
      }, void 0, !1, {
        fileName: "app/routes/account/index.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex gap-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: [
              "Nome: ",
              user.name
            ]
          }, void 0, !0, {
            fileName: "app/routes/account/index.tsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: [
              "E-mail: ",
              user.email
            ]
          }, void 0, !0, {
            fileName: "app/routes/account/index.tsx",
            lineNumber: 12,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/account/index.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/account/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this) : null;
}

// app/routes/product.tsx
var product_exports = {};
__export(product_exports, {
  default: () => ProductPage
});
var import_react12 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ProductPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, !1, {
        fileName: "app/routes/product.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
        fileName: "app/routes/product.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/product.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/product/$sku.tsx
var sku_exports = {};
__export(sku_exports, {
  default: () => ProductPage2,
  loader: () => loader4
});
var import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader4({ request, params }) {
  let product;
  return params.sku && (product = await getProduct(params.sku)), product;
}
function ProductPage2() {
  let product = (0, import_react13.useLoaderData)();
  return product ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    className: "bg-white px-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "pt-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
          "aria-label": "Breadcrumb",
          className: "pb-8",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
            className: "flex items-center",
            children: [
              product == null ? void 0 : product.categories.map((breadcrumb) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                className: "flex items-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                    className: "mr-2 text-sm font-medium text-indigo-600 transition-all hover:underline",
                    href: breadcrumb,
                    children: breadcrumb
                  }, void 0, !1, {
                    fileName: "app/routes/product/$sku.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "h-6 w-6 text-gray-300",
                    children: "\u2192"
                  }, void 0, !1, {
                    fileName: "app/routes/product/$sku.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                  }, this)
                ]
              }, breadcrumb, !0, {
                fileName: "app/routes/product/$sku.tsx",
                lineNumber: 29,
                columnNumber: 15
              }, this)),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                className: "text-sm",
                children: product.name
              }, void 0, !1, {
                fileName: "app/routes/product/$sku.tsx",
                lineNumber: 39,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/product/$sku.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/product/$sku.tsx",
          lineNumber: 26,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
          className: "grid lg:grid-cols-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "m-auto rounded-lg",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                alt: product.description,
                className: "w-full object-scale-down",
                src: product.image,
                width: "384"
              }, void 0, !1, {
                fileName: "app/routes/product/$sku.tsx",
                lineNumber: 45,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/product/$sku.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                  className: "text-2xl font-bold text-gray-900 sm:text-3xl",
                  children: product.name
                }, void 0, !1, {
                  fileName: "app/routes/product/$sku.tsx",
                  lineNumber: 53,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-4 lg:row-span-3 lg:mt-0",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                      className: "sr-only",
                      children: "Product information"
                    }, void 0, !1, {
                      fileName: "app/routes/product/$sku.tsx",
                      lineNumber: 56,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "mt-4 text-3xl text-gray-900",
                      children: [
                        "$",
                        product.price
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/product/$sku.tsx",
                      lineNumber: 57,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "mt-6",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                          className: "sr-only",
                          children: "Reviews"
                        }, void 0, !1, {
                          fileName: "app/routes/product/$sku.tsx",
                          lineNumber: 60,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex items-center",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Rating, {
                            rating: product.rating
                          }, void 0, !1, {
                            fileName: "app/routes/product/$sku.tsx",
                            lineNumber: 62,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/product/$sku.tsx",
                          lineNumber: 61,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/product/$sku.tsx",
                      lineNumber: 59,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                      className: "mt-10",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                        className: "btn-primary",
                        type: "submit",
                        children: "COMPRAR"
                      }, void 0, !1, {
                        fileName: "app/routes/product/$sku.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/product/$sku.tsx",
                      lineNumber: 66,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/product/$sku.tsx",
                  lineNumber: 55,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "py-10 text-base text-gray-900 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8",
                  dangerouslySetInnerHTML: { __html: product.description }
                }, void 0, !1, {
                  fileName: "app/routes/product/$sku.tsx",
                  lineNumber: 73,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/product/$sku.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/product/$sku.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/product/$sku.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/product/$sku.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this) : null;
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader5
});
var loader5 = async ({ request }) => await logout(request);

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Home2,
  loader: () => loader6
});
var import_node4 = require("@remix-run/node"), import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader6({ request }) {
  let params = Object.fromEntries(new URL(request.url).searchParams), data = await search(params.query, params);
  return (0, import_node4.json)(data);
}
function Home2() {
  let data = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
        className: "my-10",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Showcase, {
            products: data.hits
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-10 flex justify-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, {}, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 28,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => Login,
  meta: () => meta2
});
var import_node5 = require("@remix-run/node"), import_react15 = require("@remix-run/react");

// app/components/input/input.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Input({ id, label, error, className, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mb-2 flex flex-col gap-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
        className: "block text-lg font-medium text-gray-700",
        htmlFor: id,
        children: label
      }, void 0, !1, {
        fileName: "app/components/input/input.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        "aria-describedby": `${id}-error`,
        "aria-invalid": error ? !0 : void 0,
        className: `input-text w-100 ${className}`,
        id,
        ...rest
      }, void 0, !1, {
        fileName: "app/components/input/input.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "text-sm text-red-500",
        id: `${id}-error`,
        children: error
      }, void 0, !1, {
        fileName: "app/components/input/input.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/input/input.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta2 = () => ({
  title: "Login",
  description: "Fa\xE7a seu login"
}), action = async ({ request }) => {
  await new Promise((res) => setTimeout(res, 2e3));
  let data = Object.fromEntries(await request.formData()), errors = {};
  return data.email || (errors.email = "Campo obrigat\xF3rio"), data.password || (errors.password = "Campo obrigat\xF3rio"), Object.keys(errors).length ? (0, import_node5.json)({ errors }, { status: 401 }) : createUserSession(request, data.email.toString());
};
function Login() {
  var _a, _b;
  let actionData = (0, import_react15.useActionData)(), transition = (0, import_react15.useTransition)(), isLoading = ["loading", "submitting"].includes(transition.state);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react15.Form, {
    autoComplete: "off",
    className: "m-auto flex h-screen max-w-md flex-col content-center justify-center",
    method: "post",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "mb-4 text-3xl",
        children: "Login"
      }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 50,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
        className: "flex flex-col gap-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
            error: (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email,
            id: "email",
            label: "E-mail",
            name: "email"
          }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
            error: (_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.password,
            id: "password",
            label: "Senha",
            name: "password",
            type: "password"
          }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 51,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        className: "btn-primary",
        disabled: isLoading,
        type: "submit",
        children: isLoading ? "Entrando..." : "Entrar"
      }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 61,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "10de9977", entry: { module: "/build/entry.client-QXVTZRQJ.js", imports: ["/build/_shared/chunk-D6ACXSXN.js", "/build/_shared/chunk-BPQL3L3K.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ZE7ORPX7.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/account": { id: "routes/account", parentId: "root", path: "account", index: void 0, caseSensitive: void 0, module: "/build/routes/account-PXE3MSRL.js", imports: ["/build/_shared/chunk-65B4HZGS.js", "/build/_shared/chunk-SQ3UY7HH.js", "/build/_shared/chunk-6R3UHOBD.js", "/build/_shared/chunk-X7BPVLEU.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/account/address": { id: "routes/account/address", parentId: "routes/account", path: "address", index: void 0, caseSensitive: void 0, module: "/build/routes/account/address-SQQ7XUW6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/account/cards": { id: "routes/account/cards", parentId: "routes/account", path: "cards", index: void 0, caseSensitive: void 0, module: "/build/routes/account/cards-2FCH777F.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/account/index": { id: "routes/account/index", parentId: "routes/account", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/account/index-SQHLQURP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/account/orders": { id: "routes/account/orders", parentId: "routes/account", path: "orders", index: void 0, caseSensitive: void 0, module: "/build/routes/account/orders-SFLDMXCB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/category": { id: "routes/category", parentId: "root", path: "category", index: void 0, caseSensitive: void 0, module: "/build/routes/category-FI7YDCTM.js", imports: ["/build/_shared/chunk-QOBXBTJB.js", "/build/_shared/chunk-OZDKBTKX.js", "/build/_shared/chunk-SQ3UY7HH.js", "/build/_shared/chunk-6R3UHOBD.js", "/build/_shared/chunk-X7BPVLEU.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-UNSKOR55.js", imports: ["/build/_shared/chunk-QOBXBTJB.js", "/build/_shared/chunk-OZDKBTKX.js", "/build/_shared/chunk-SQ3UY7HH.js", "/build/_shared/chunk-6R3UHOBD.js", "/build/_shared/chunk-X7BPVLEU.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-IOACFAQE.js", imports: ["/build/_shared/chunk-65B4HZGS.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-DOMDNNGV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/product": { id: "routes/product", parentId: "root", path: "product", index: void 0, caseSensitive: void 0, module: "/build/routes/product-JSPPPFST.js", imports: ["/build/_shared/chunk-SQ3UY7HH.js", "/build/_shared/chunk-6R3UHOBD.js", "/build/_shared/chunk-X7BPVLEU.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/product/$sku": { id: "routes/product/$sku", parentId: "routes/product", path: ":sku", index: void 0, caseSensitive: void 0, module: "/build/routes/product/$sku-QUD5VEEF.js", imports: ["/build/_shared/chunk-OZDKBTKX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-10DE9977.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/category": {
    id: "routes/category",
    parentId: "root",
    path: "category",
    index: void 0,
    caseSensitive: void 0,
    module: category_exports
  },
  "routes/account": {
    id: "routes/account",
    parentId: "root",
    path: "account",
    index: void 0,
    caseSensitive: void 0,
    module: account_exports
  },
  "routes/account/address": {
    id: "routes/account/address",
    parentId: "routes/account",
    path: "address",
    index: void 0,
    caseSensitive: void 0,
    module: address_exports
  },
  "routes/account/orders": {
    id: "routes/account/orders",
    parentId: "routes/account",
    path: "orders",
    index: void 0,
    caseSensitive: void 0,
    module: orders_exports
  },
  "routes/account/cards": {
    id: "routes/account/cards",
    parentId: "routes/account",
    path: "cards",
    index: void 0,
    caseSensitive: void 0,
    module: cards_exports
  },
  "routes/account/index": {
    id: "routes/account/index",
    parentId: "routes/account",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: account_exports2
  },
  "routes/product": {
    id: "routes/product",
    parentId: "root",
    path: "product",
    index: void 0,
    caseSensitive: void 0,
    module: product_exports
  },
  "routes/product/$sku": {
    id: "routes/product/$sku",
    parentId: "routes/product",
    path: ":sku",
    index: void 0,
    caseSensitive: void 0,
    module: sku_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
