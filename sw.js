const Interest = {
    "baseline": {
        "status": "limited"
    },
    "browser_implementations": {
    },
    "feature_id": "interest-invokers",
    "name": "Interest Invokers",
    "spec": {
        "links": [
            {
                "link": "https://open-ui.org/components/interest-invokers.explainer/"
            }
        ]
    },
    "usage": {
        "chromium": {}
    },
    "wpt": {
        "experimental": {
            "chrome": {
              "score": 0.141348049
            },
            "edge": {
                "score": 0.141978715
            },
            "firefox": {
                "score": 0.141348049
            },
            "safari": {
                "score": 0.141348049
            }
        },
        "stable": {
            "chrome": {
                "score": 0.141348049
            },
            "edge": {
                "score": 0.141348049
            },
            "firefox": {
                "score": 0.141348049
            },
            "safari": {
                "score": 0.141348049
            }
        }
    }
};

const Commands = {
    "baseline": {
        "status": "limited"
    },
    "browser_implementations": {
        "chrome": {
            "date": "2024-12-06",
            "status": "available",
            "version": "133"
        },
        "firefox": {
            "date": "2025-04-25",
            "status": "available",
            "version": "136"
        },
        "safari": {
            "date": "2024-12-06",
            "status": "available",
            "version": "18.3"
        },
    },
    "feature_id": "invoker-commands",
    "name": "Invoker Commands",
    "spec": {
        "links": [
            {
                "link": "https://open-ui.org/components/invokers.explainer/"
            }
        ]
    },
    "usage": {
        "chromium": {}
    },
    "wpt": {
        "experimental": {
            "chrome": {
              "metadata": {
                "status": "C"
              }
            },
            "edge": {
                "score": 0.141978715
            },
            "firefox": {
                "metadata": {
                  "status": "C"
                }
            },
            "safari": {
                "metadata": {
                  "status": "C"
                }
            }
        },
        "stable": {
            "chrome": {
                "score": 0.141348049
            },
            "edge": {
                "score": 0.141348049
            },
            "firefox": {
                "score": 0.141348049
            },
            "safari": {
                "score": 0.141348049
            }
        }
    }
};

self.addEventListener('fetch', (event) => {

  if (event.request.url.includes('https://api.webstatus.dev/v1/features/invoker-commands')) {
    return event.respondWith(new Response(JSON.stringify(Commands)));
  }

  if (event.request.url.includes('https://api.webstatus.dev/v1/features/interest-invokers')) {
    return event.respondWith(new Response(JSON.stringify(Interest)));
  }
});
