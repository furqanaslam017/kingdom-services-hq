import { L as jsxRuntimeExports, V as reactExports } from "./server-Dgf1Fqjt.mjs";
import { D as motion, L as Link, b as Crown, B as BUSINESS, f as PhoneCall, d as Menu, c as MapPin, i as Truck, A as AnimatePresence, X, P as Package, H as HardHat, R as Recycle, S as SERVICES, C as CITIES, a3 as useConstant, a4 as useIsomorphicLayoutEffect, z as microtask, k as cancelMicrotask, n as createLucideIcon, E as motionValue, $ as supportsViewTimeline, _ as supportsScrollTimeline, F as noop, m as collectMotionValues, w as interpolate, j as cancelFrame, s as frame, O as resize, e as MotionConfigContext, t as frameData, o as defaultOffset$1, l as clamp, K as progress, a7 as velocityPerSecond, x as isHTMLElement } from "./router-CzfQMkqj.mjs";
import { C as CTASection, a as Star, S as ScrollReveal, u as useInView } from "./CTASection-DZI7TcNj.mjs";
import { S as SectionHeader } from "./SectionHeader-CeywRX1k.mjs";
import { C as Check, a as ChevronLeft, b as ChevronRight } from "./chevron-right-C9-OPG1o.mjs";
import { P as PricingTeaser } from "./PricingTeaser-Bqr14AAP.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./types-BZpehCtZ.mjs";
import "./circle-check-CsIOETJo.mjs";
function observeTimeline(update, timeline) {
  let prevProgress;
  const onFrame = () => {
    const { currentTime } = timeline;
    const percentage = currentTime === null ? 0 : currentTime.value;
    const progress2 = percentage / 100;
    if (prevProgress !== progress2) {
      update(progress2);
    }
    prevProgress = progress2;
  };
  frame.preUpdate(onFrame, true);
  return () => cancelFrame(onFrame);
}
function transform(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, options);
  return useImmediate ? interpolator(inputValue) : interpolator;
}
function canUseNativeTimeline(target) {
  if (typeof window === "undefined")
    return false;
  return target ? supportsViewTimeline() : supportsScrollTimeline();
}
const maxElapsed = 50;
const createAxisInfo = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
});
const createScrollInfo = () => ({
  time: 0,
  x: createAxisInfo(),
  y: createAxisInfo()
});
const keys = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function updateAxisInfo(element, axisName, info, time) {
  const axis = info[axisName];
  const { length, position } = keys[axisName];
  const prev = axis.current;
  const prevTime = info.time;
  axis.current = Math.abs(element[`scroll${position}`]);
  axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
  axis.offset.length = 0;
  axis.offset[0] = 0;
  axis.offset[1] = axis.scrollLength;
  axis.progress = progress(0, axis.scrollLength, axis.current);
  const elapsed = time - prevTime;
  axis.velocity = elapsed > maxElapsed ? 0 : velocityPerSecond(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
  updateAxisInfo(element, "x", info, time);
  updateAxisInfo(element, "y", info, time);
  info.time = time;
}
function calcInset(element, container) {
  const inset = { x: 0, y: 0 };
  let current = element;
  while (current && current !== container) {
    if (isHTMLElement(current)) {
      inset.x += current.offsetLeft;
      inset.y += current.offsetTop;
      current = current.offsetParent;
    } else if (current.tagName === "svg") {
      const svgBoundingBox = current.getBoundingClientRect();
      current = current.parentElement;
      const parentBoundingBox = current.getBoundingClientRect();
      inset.x += svgBoundingBox.left - parentBoundingBox.left;
      inset.y += svgBoundingBox.top - parentBoundingBox.top;
    } else if (current instanceof SVGGraphicsElement) {
      const { x, y } = current.getBBox();
      inset.x += x;
      inset.y += y;
      let svg = null;
      let parent = current.parentNode;
      while (!svg) {
        if (parent.tagName === "svg") {
          svg = parent;
        }
        parent = current.parentNode;
      }
      current = svg;
    } else {
      break;
    }
  }
  return inset;
}
const namedEdges = {
  start: 0,
  center: 0.5,
  end: 1
};
function resolveEdge(edge, length, inset = 0) {
  let delta = 0;
  if (edge in namedEdges) {
    edge = namedEdges[edge];
  }
  if (typeof edge === "string") {
    const asNumber = parseFloat(edge);
    if (edge.endsWith("px")) {
      delta = asNumber;
    } else if (edge.endsWith("%")) {
      edge = asNumber / 100;
    } else if (edge.endsWith("vw")) {
      delta = asNumber / 100 * document.documentElement.clientWidth;
    } else if (edge.endsWith("vh")) {
      delta = asNumber / 100 * document.documentElement.clientHeight;
    } else {
      edge = asNumber;
    }
  }
  if (typeof edge === "number") {
    delta = length * edge;
  }
  return inset + delta;
}
const defaultOffset = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
  let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
  let targetPoint = 0;
  let containerPoint = 0;
  if (typeof offset === "number") {
    offsetDefinition = [offset, offset];
  } else if (typeof offset === "string") {
    offset = offset.trim();
    if (offset.includes(" ")) {
      offsetDefinition = offset.split(" ");
    } else {
      offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
    }
  }
  targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
  containerPoint = resolveEdge(offsetDefinition[1], containerLength);
  return targetPoint - containerPoint;
}
const ScrollOffset = {
  Enter: [
    [0, 1],
    [1, 1]
  ],
  Exit: [
    [0, 0],
    [1, 0]
  ],
  Any: [
    [1, 0],
    [0, 1]
  ],
  All: [
    [0, 0],
    [1, 1]
  ]
};
const point = { x: 0, y: 0 };
function getTargetSize(target) {
  return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : { width: target.clientWidth, height: target.clientHeight };
}
function resolveOffsets(container, info, options) {
  const { offset: offsetDefinition = ScrollOffset.All } = options;
  const { target = container, axis = "y" } = options;
  const lengthLabel = axis === "y" ? "height" : "width";
  const inset = target !== container ? calcInset(target, container) : point;
  const targetSize = target === container ? { width: container.scrollWidth, height: container.scrollHeight } : getTargetSize(target);
  const containerSize = {
    width: container.clientWidth,
    height: container.clientHeight
  };
  info[axis].offset.length = 0;
  let hasChanged = !info[axis].interpolate;
  const numOffsets = offsetDefinition.length;
  for (let i = 0; i < numOffsets; i++) {
    const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
    if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
      hasChanged = true;
    }
    info[axis].offset[i] = offset;
  }
  if (hasChanged) {
    info[axis].interpolate = interpolate(info[axis].offset, defaultOffset$1(offsetDefinition), { clamp: false });
    info[axis].interpolatorOffsets = [...info[axis].offset];
  }
  info[axis].progress = clamp(0, 1, info[axis].interpolate(info[axis].current));
}
function measure(container, target = container, info) {
  info.x.targetOffset = 0;
  info.y.targetOffset = 0;
  if (target !== container) {
    let node = target;
    while (node && node !== container) {
      info.x.targetOffset += node.offsetLeft;
      info.y.targetOffset += node.offsetTop;
      node = node.offsetParent;
    }
  }
  info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
  info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
  info.x.containerLength = container.clientWidth;
  info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
  return {
    measure: (time) => {
      measure(element, options.target, info);
      updateScrollInfo(element, info, time);
      if (options.offset || options.target) {
        resolveOffsets(element, info, options);
      }
    },
    notify: () => onScroll(info)
  };
}
const scrollListeners = /* @__PURE__ */ new WeakMap();
const resizeListeners = /* @__PURE__ */ new WeakMap();
const onScrollHandlers = /* @__PURE__ */ new WeakMap();
const scrollSize = /* @__PURE__ */ new WeakMap();
const dimensionCheckProcesses = /* @__PURE__ */ new WeakMap();
const getEventTarget = (element) => element === document.scrollingElement ? window : element;
function scrollInfo(onScroll, { container = document.scrollingElement, trackContentSize = false, ...options } = {}) {
  if (!container)
    return noop;
  let containerHandlers = onScrollHandlers.get(container);
  if (!containerHandlers) {
    containerHandlers = /* @__PURE__ */ new Set();
    onScrollHandlers.set(container, containerHandlers);
  }
  const info = createScrollInfo();
  const containerHandler = createOnScrollHandler(container, onScroll, info, options);
  containerHandlers.add(containerHandler);
  if (!scrollListeners.has(container)) {
    const measureAll = () => {
      for (const handler of containerHandlers) {
        handler.measure(frameData.timestamp);
      }
      frame.preUpdate(notifyAll);
    };
    const notifyAll = () => {
      for (const handler of containerHandlers) {
        handler.notify();
      }
    };
    const listener2 = () => frame.read(measureAll);
    scrollListeners.set(container, listener2);
    const target = getEventTarget(container);
    window.addEventListener("resize", listener2);
    if (container !== document.documentElement) {
      resizeListeners.set(container, resize(container, listener2));
    }
    target.addEventListener("scroll", listener2);
    listener2();
  }
  if (trackContentSize && !dimensionCheckProcesses.has(container)) {
    const listener2 = scrollListeners.get(container);
    const size = {
      width: container.scrollWidth,
      height: container.scrollHeight
    };
    scrollSize.set(container, size);
    const checkScrollDimensions = () => {
      const newWidth = container.scrollWidth;
      const newHeight = container.scrollHeight;
      if (size.width !== newWidth || size.height !== newHeight) {
        listener2();
        size.width = newWidth;
        size.height = newHeight;
      }
    };
    const dimensionCheckProcess = frame.read(checkScrollDimensions, true);
    dimensionCheckProcesses.set(container, dimensionCheckProcess);
  }
  const listener = scrollListeners.get(container);
  frame.read(listener, false, true);
  return () => {
    cancelFrame(listener);
    const currentHandlers = onScrollHandlers.get(container);
    if (!currentHandlers)
      return;
    currentHandlers.delete(containerHandler);
    if (currentHandlers.size)
      return;
    const scrollListener = scrollListeners.get(container);
    scrollListeners.delete(container);
    if (scrollListener) {
      getEventTarget(container).removeEventListener("scroll", scrollListener);
      resizeListeners.get(container)?.();
      window.removeEventListener("resize", scrollListener);
    }
    const dimensionCheckProcess = dimensionCheckProcesses.get(container);
    if (dimensionCheckProcess) {
      cancelFrame(dimensionCheckProcess);
      dimensionCheckProcesses.delete(container);
    }
    scrollSize.delete(container);
  };
}
const presets = [
  [ScrollOffset.Enter, "entry"],
  [ScrollOffset.Exit, "exit"],
  [ScrollOffset.Any, "cover"],
  [ScrollOffset.All, "contain"]
];
const stringToProgress = {
  start: 0,
  end: 1
};
function parseStringOffset(s) {
  const parts = s.trim().split(/\s+/);
  if (parts.length !== 2)
    return void 0;
  const a = stringToProgress[parts[0]];
  const b = stringToProgress[parts[1]];
  if (a === void 0 || b === void 0)
    return void 0;
  return [a, b];
}
function normaliseOffset(offset) {
  if (offset.length !== 2)
    return void 0;
  const result = [];
  for (const item of offset) {
    if (Array.isArray(item)) {
      result.push(item);
    } else if (typeof item === "string") {
      const parsed = parseStringOffset(item);
      if (!parsed)
        return void 0;
      result.push(parsed);
    } else {
      return void 0;
    }
  }
  return result;
}
function matchesPreset(offset, preset) {
  const normalised = normaliseOffset(offset);
  if (!normalised)
    return false;
  for (let i = 0; i < 2; i++) {
    const o = normalised[i];
    const p = preset[i];
    if (o[0] !== p[0] || o[1] !== p[1])
      return false;
  }
  return true;
}
function offsetToViewTimelineRange(offset) {
  if (!offset) {
    return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  }
  for (const [preset, name] of presets) {
    if (matchesPreset(offset, preset)) {
      return { rangeStart: `${name} 0%`, rangeEnd: `${name} 100%` };
    }
  }
  return void 0;
}
const timelineCache = /* @__PURE__ */ new Map();
function scrollTimelineFallback(options) {
  const currentTime = { value: 0 };
  const cancel = scrollInfo((info) => {
    currentTime.value = info[options.axis].progress * 100;
  }, options);
  return { currentTime, cancel };
}
function getTimeline({ source, container, ...options }) {
  const { axis } = options;
  if (source)
    container = source;
  let containerCache = timelineCache.get(container);
  if (!containerCache) {
    containerCache = /* @__PURE__ */ new Map();
    timelineCache.set(container, containerCache);
  }
  const targetKey = options.target ?? "self";
  let targetCache = containerCache.get(targetKey);
  if (!targetCache) {
    targetCache = {};
    containerCache.set(targetKey, targetCache);
  }
  const axisKey = axis + (options.offset ?? []).join(",");
  if (!targetCache[axisKey]) {
    if (options.target && canUseNativeTimeline(options.target)) {
      const range = offsetToViewTimelineRange(options.offset);
      if (range) {
        targetCache[axisKey] = new ViewTimeline({
          subject: options.target,
          axis
        });
      } else {
        targetCache[axisKey] = scrollTimelineFallback({
          container,
          ...options
        });
      }
    } else if (canUseNativeTimeline()) {
      targetCache[axisKey] = new ScrollTimeline({
        source: container,
        axis
      });
    } else {
      targetCache[axisKey] = scrollTimelineFallback({
        container,
        ...options
      });
    }
  }
  return targetCache[axisKey];
}
function attachToAnimation(animation, options) {
  const timeline = getTimeline(options);
  const range = options.target ? offsetToViewTimelineRange(options.offset) : void 0;
  const useNative = options.target ? canUseNativeTimeline(options.target) && !!range : canUseNativeTimeline();
  return animation.attachTimeline({
    timeline: useNative ? timeline : void 0,
    ...range && useNative && {
      rangeStart: range.rangeStart,
      rangeEnd: range.rangeEnd
    },
    observe: (valueAnimation) => {
      valueAnimation.pause();
      return observeTimeline((progress2) => {
        valueAnimation.time = valueAnimation.iterationDuration * progress2;
      }, timeline);
    }
  });
}
function isElementTracking(options) {
  return options && (options.target || options.offset);
}
function isOnScrollWithInfo(onScroll) {
  return onScroll.length === 2;
}
function attachToFunction(onScroll, options) {
  if (isOnScrollWithInfo(onScroll) || isElementTracking(options)) {
    return scrollInfo((info) => {
      onScroll(info[options.axis].progress, info);
    }, options);
  } else {
    return observeTimeline(onScroll, getTimeline(options));
  }
}
function scroll(onScroll, { axis = "y", container = document.scrollingElement, ...options } = {}) {
  if (!container)
    return noop;
  const optionsWithDefaults = { axis, container, ...options };
  return typeof onScroll === "function" ? attachToFunction(onScroll, optionsWithDefaults) : attachToAnimation(onScroll, optionsWithDefaults);
}
const createScrollMotionValues = () => ({
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  scrollXProgress: motionValue(0),
  scrollYProgress: motionValue(0)
});
const isRefPending = (ref) => {
  if (!ref)
    return false;
  return !ref.current;
};
function makeAccelerateConfig(axis, options, container, target) {
  return {
    // Refs attach child-first; defer so target.current is populated
    // before scroll() reads it.
    factory: (animation) => {
      let cleanup;
      const start = () => {
        if (isRefPending(container) || isRefPending(target)) {
          microtask.read(start);
          return;
        }
        cleanup = scroll(animation, {
          ...options,
          axis,
          container: container?.current || void 0,
          target: target?.current || void 0
        });
      };
      microtask.read(start);
      return () => {
        cancelMicrotask(start);
        cleanup?.();
      };
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: (v) => v,
    duration: 1
  };
}
function canAccelerateScroll(target, offset) {
  if (typeof window === "undefined")
    return false;
  return target ? supportsViewTimeline() && !!offsetToViewTimelineRange(offset) : supportsScrollTimeline();
}
function useScroll({ container, target, ...options } = {}) {
  const values = useConstant(createScrollMotionValues);
  if (canAccelerateScroll(target, options.offset)) {
    values.scrollXProgress.accelerate = makeAccelerateConfig("x", options, container, target);
    values.scrollYProgress.accelerate = makeAccelerateConfig("y", options, container, target);
  }
  const scrollAnimation = reactExports.useRef(null);
  const needsStart = reactExports.useRef(false);
  const start = reactExports.useCallback(() => {
    scrollAnimation.current = scroll((_progress, { x, y }) => {
      values.scrollX.set(x.current);
      values.scrollXProgress.set(x.progress);
      values.scrollY.set(y.current);
      values.scrollYProgress.set(y.progress);
    }, {
      ...options,
      container: container?.current || void 0,
      target: target?.current || void 0
    });
    return () => {
      scrollAnimation.current?.();
    };
  }, [container, target, JSON.stringify(options.offset)]);
  useIsomorphicLayoutEffect(() => {
    needsStart.current = false;
    if (isRefPending(container) || isRefPending(target)) {
      needsStart.current = true;
      return;
    } else {
      return start();
    }
  }, [start]);
  reactExports.useEffect(() => {
    if (!needsStart.current)
      return;
    let cleanup;
    const tryStart = () => {
      const containerPending = isRefPending(container);
      const targetPending = isRefPending(target);
      if (!containerPending && !targetPending)
        cleanup = start();
    };
    microtask.read(tryStart);
    return () => {
      cancelMicrotask(tryStart);
      cleanup?.();
    };
  }, [start]);
  return values;
}
function useMotionValue(initial) {
  const value = useConstant(() => motionValue(initial));
  const { isStatic } = reactExports.useContext(MotionConfigContext);
  if (isStatic) {
    const [, setLatest] = reactExports.useState(initial);
    reactExports.useEffect(() => value.on("change", setLatest), []);
  }
  return value;
}
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect(() => {
    const scheduleUpdate = () => frame.preRender(updateValue, false, true);
    const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
    return () => {
      subscriptions.forEach((unsubscribe) => unsubscribe());
      cancelFrame(updateValue);
    };
  });
  return value;
}
function useComputed(compute) {
  collectMotionValues.current = [];
  compute();
  const value = useCombineMotionValues(collectMotionValues.current, compute);
  collectMotionValues.current = void 0;
  return value;
}
function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
  if (typeof input === "function") {
    return useComputed(input);
  }
  const isOutputMap = outputRangeOrMap !== void 0 && !Array.isArray(outputRangeOrMap) && typeof inputRangeOrTransformer !== "function";
  if (isOutputMap) {
    return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
  }
  const outputRange = outputRangeOrMap;
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
  const inputAccelerate = !Array.isArray(input) ? input.accelerate : void 0;
  if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && options?.clamp !== false) {
    result.accelerate = {
      ...inputAccelerate,
      times: inputRangeOrTransformer,
      keyframes: outputRangeOrMap,
      isTransformed: true,
      ...{}
    };
  }
  return result;
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}
function useMapTransform(inputValue, inputRange, outputMap, options) {
  const keys2 = useConstant(() => Object.keys(outputMap));
  const output = useConstant(() => ({}));
  for (const key of keys2) {
    output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
  }
  return output;
}
const __iconNode$7 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w"
    }
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat"
    }
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf"
    }
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }]
];
const Boxes = createLucideIcon("boxes", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
];
const CalendarCheck = createLucideIcon("calendar-check", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3", key: "1dgpiv" }],
  [
    "path",
    {
      d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",
      key: "xacw8m"
    }
  ],
  ["path", { d: "M4 18v2", key: "jwo5n2" }],
  ["path", { d: "M20 18v2", key: "1ar1qi" }],
  ["path", { d: "M12 4v9", key: "oqhhn3" }]
];
const Sofa = createLucideIcon("sofa", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11", key: "pb2vm6" }],
  [
    "path",
    {
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z",
      key: "doq5xv"
    }
  ],
  ["path", { d: "M6 13h12", key: "yf64js" }],
  ["path", { d: "M6 17h12", key: "1jwigz" }]
];
const Warehouse = createLucideIcon("warehouse", __iconNode);
function BrandedTruck({ className }) {
  const svgRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const handleMouseMove = (e) => {
      const rect = svg.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      svg.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(2deg)`;
    };
    const handleMouseLeave = () => {
      svg.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)";
    };
    svg.addEventListener("mousemove", handleMouseMove);
    svg.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      svg.removeEventListener("mousemove", handleMouseMove);
      svg.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.svg,
    {
      ref: svgRef,
      viewBox: "0 0 600 340",
      className,
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 1.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
      style: { transition: "transform 0.3s ease-out", transformOrigin: "center" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "truckBody", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#2563EB" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#1E40AF" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "truckCab", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#3B82F6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#1D4ED8" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "windowReflect", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "rgba(255,255,255,0.45)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "rgba(255,255,255,0.1)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "rgba(255,255,255,0.05)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "tireGrad", cx: "50%", cy: "50%", r: "50%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "60%", stopColor: "#1F2937" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#111827" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "rimGrad", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#E5E7EB" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#9CA3AF" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "shadowGrad", cx: "50%", cy: "50%", r: "50%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "rgba(0,0,0,0.35)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "rgba(0,0,0,0)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "lightGlow", cx: "0%", cy: "50%", r: "100%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "rgba(255,255,200,0.9)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "rgba(255,255,200,0)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "300", cy: "310", rx: "260", ry: "14", fill: "url(#shadowGrad)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "40", y: "60", width: "340", height: "190", rx: "14", fill: "url(#truckBody)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "35", y: "54", width: "350", height: "8", rx: "4", fill: "#1E3A8A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "40", y: "240", width: "340", height: "10", rx: "3", fill: "#1E3A8A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "40", y: "130", width: "340", height: "28", fill: "#F8FAFC" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "210",
            y: "150",
            textAnchor: "middle",
            fill: "#1E40AF",
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "18",
            fontWeight: "600",
            fontStyle: "italic",
            children: "Kingdom Come Services"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "210",
            y: "170",
            textAnchor: "middle",
            fill: "#3B82F6",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "9",
            fontWeight: "600",
            letterSpacing: "2",
            children: "JACKSON, MS"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(70, 88)", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M12 2L15 8L20 5L18 12H6L4 5L9 8L12 2Z",
              fill: "#F59E0B",
              stroke: "#D97706",
              strokeWidth: "0.5"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "14", r: "2", fill: "#F59E0B" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M380 250V110C380 95 392 80 410 75L460 65C478 60 490 70 495 85L520 140C525 150 530 165 530 180V250H380Z",
            fill: "url(#truckCab)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M385 250V115C385 100 396 86 412 81L458 71",
            fill: "none",
            stroke: "rgba(255,255,255,0.15)",
            strokeWidth: "2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M410 85L455 75L490 140L410 140Z",
            fill: "url(#windowReflect)",
            stroke: "rgba(255,255,255,0.2)",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M465 78L495 85L515 135L470 135Z",
            fill: "url(#windowReflect)",
            stroke: "rgba(255,255,255,0.2)",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M460 75V250", stroke: "rgba(0,0,0,0.12)", strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "468", y: "155", width: "16", height: "5", rx: "2.5", fill: "#CBD5E1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "525", cy: "195", rx: "7", ry: "12", fill: "#FEF3C7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "527", cy: "195", rx: "3", ry: "6", fill: "#FFFFFF" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M532 185L600 165V225L532 205Z", fill: "url(#lightGlow)", opacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "33", y: "170", width: "7", height: "28", rx: "3", fill: "#EF4444" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "34", y: "172", width: "3", height: "10", rx: "1", fill: "#FCA5A5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "515", y: "230", width: "28", height: "18", rx: "6", fill: "#374151" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "520", y: "234", width: "18", height: "10", rx: "3", fill: "#6B7280" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "30", y: "235", width: "18", height: "14", rx: "5", fill: "#374151" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "120", cy: "265", r: "34", fill: "url(#tireGrad)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "120", cy: "265", r: "22", fill: "url(#rimGrad)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "120", cy: "265", r: "16", fill: "#E5E7EB" }),
          [0, 45, 90, 135, 180, 225, 270, 315].map((deg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "120",
              y1: "265",
              x2: 120 + 14 * Math.cos(deg * Math.PI / 180),
              y2: 265 + 14 * Math.sin(deg * Math.PI / 180),
              stroke: "#9CA3AF",
              strokeWidth: "2",
              strokeLinecap: "round"
            },
            deg
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "120", cy: "265", r: "5", fill: "#6B7280" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "220", cy: "265", r: "34", fill: "url(#tireGrad)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "220", cy: "265", r: "22", fill: "url(#rimGrad)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "220", cy: "265", r: "16", fill: "#E5E7EB" }),
          [0, 45, 90, 135, 180, 225, 270, 315].map((deg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "220",
              y1: "265",
              x2: 220 + 14 * Math.cos(deg * Math.PI / 180),
              y2: 265 + 14 * Math.sin(deg * Math.PI / 180),
              stroke: "#9CA3AF",
              strokeWidth: "2",
              strokeLinecap: "round"
            },
            deg
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "220", cy: "265", r: "5", fill: "#6B7280" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "460", cy: "265", r: "34", fill: "url(#tireGrad)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "460", cy: "265", r: "22", fill: "url(#rimGrad)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "460", cy: "265", r: "16", fill: "#E5E7EB" }),
          [0, 45, 90, 135, 180, 225, 270, 315].map((deg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "460",
              y1: "265",
              x2: 460 + 14 * Math.cos(deg * Math.PI / 180),
              y2: 265 + 14 * Math.sin(deg * Math.PI / 180),
              stroke: "#9CA3AF",
              strokeWidth: "2",
              strokeLinecap: "round"
            },
            deg
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "460", cy: "265", r: "5", fill: "#6B7280" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "100", y: "240", width: "12", height: "30", rx: "2", fill: "#111827" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "200", y: "240", width: "12", height: "30", rx: "2", fill: "#111827" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "440", y: "240", width: "12", height: "30", rx: "2", fill: "#111827" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "55", y: "250", width: "465", height: "6", rx: "3", fill: "#374151" })
      ]
    }
  );
}
const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" }
];
const HERO_VIDEO = "https://videos.pexels.com/video-files/4488751/4488751-uhd_2560_1440_25fps.mp4";
const HERO_POSTER = "https://images.pexels.com/videos/4488751/free-video-4488751.jpg?auto=compress&cs=tinysrgb&w=1920";
const HEADLINE_WORDS_TOP = ["Kingdom", "Come"];
const HEADLINE_WORDS_BOTTOM = ["Services."];
const ORBS = [
  { cx: 12, cy: 22, r: 120, opacity: 0.12, color: "#60A5FA", delay: 0 },
  { cx: 78, cy: 65, r: 90, opacity: 0.1, color: "#3B82F6", delay: 2 },
  { cx: 88, cy: 18, r: 70, opacity: 0.08, color: "#93C5FD", delay: 4 },
  { cx: 25, cy: 75, r: 100, opacity: 0.09, color: "#2563EB", delay: 1 }
];
function Hero() {
  const [open, setOpen] = reactExports.useState(false);
  const sectionRef = reactExports.useRef(null);
  const videoRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  reactExports.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref: sectionRef,
      className: "relative flex h-screen min-h-[640px] w-full items-center justify-center bg-background p-3 md:p-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full w-full max-w-[1536px] flex-col overflow-hidden rounded-[2rem] bg-foreground/5 shadow-elegant md:rounded-[3rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0 h-[120%] w-full", style: { y: videoY }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "video",
            {
              ref: videoRef,
              className: "h-full w-full object-cover",
              autoPlay: true,
              muted: true,
              loop: true,
              playsInline: true,
              preload: "metadata",
              poster: HERO_POSTER,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: HERO_VIDEO, type: "video/mp4" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "pointer-events-none absolute inset-0 z-[1]",
              style: {
                background: "linear-gradient(135deg, oklch(0.12 0.06 265 / 0.65) 0%, oklch(0.28 0.16 265 / 0.50) 45%, oklch(0.18 0.08 265 / 0.82) 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-foreground/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "pointer-events-none absolute inset-0 z-[2] bg-background",
              style: { opacity: overlayOpacity }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "pointer-events-none absolute inset-0 z-[3] opacity-[0.035] mix-blend-overlay",
              style: {
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat"
              }
            }
          ),
          ORBS.map((orb, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "pointer-events-none absolute z-[2] rounded-full blur-3xl",
              style: {
                left: `${orb.cx}%`,
                top: `${orb.cy}%`,
                width: orb.r,
                height: orb.r,
                backgroundColor: orb.color,
                opacity: orb.opacity,
                transform: "translate(-50%, -50%)"
              },
              animate: {
                x: [0, 20, -10, 0],
                y: [0, -15, 10, 0],
                scale: [1, 1.1, 0.95, 1]
              },
              transition: {
                duration: 12,
                delay: orb.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }
            },
            i
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "pointer-events-none absolute inset-0 z-[3]",
              style: {
                background: "radial-gradient(ellipse at center, transparent 40%, oklch(0.12 0.06 265 / 0.45) 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "relative z-30 flex w-full items-center justify-between px-6 py-5 md:px-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.1, duration: 0.6 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5 text-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg leading-none tracking-tight", children: "Kingdom Come" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.ul,
              {
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2, duration: 0.6 },
                className: "hidden items-center gap-8 md:flex",
                children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: n.to,
                    className: "group relative text-sm text-white/75 transition-colors duration-300 hover:text-white",
                    activeProps: { className: "text-white" },
                    children: [
                      n.label,
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" })
                    ]
                  }
                ) }, n.to))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.a,
                {
                  href: BUSINESS.phoneHref,
                  whileHover: { scale: 1.04 },
                  whileTap: { scale: 0.97 },
                  initial: { opacity: 0, x: 20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.3, duration: 0.6 },
                  className: "hidden items-center gap-2 rounded-full bg-white py-2.5 pl-2.5 pr-5 text-sm font-semibold text-primary shadow-lg shadow-primary/20 transition-shadow hover:shadow-xl hover:shadow-primary/30 md:inline-flex",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-7 w-7 place-items-center rounded-full bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "h-3.5 w-3.5 text-white" }) }),
                    "Get Free Quote"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setOpen(true),
                  "aria-label": "Open menu",
                  className: "grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/20 backdrop-blur-md md:hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "relative z-20 flex flex-1 flex-col items-center justify-center px-6",
              style: { y: contentY },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: -10, scale: 0.95 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    transition: { delay: 0.4, duration: 0.5 },
                    className: "mx-auto mb-6 flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md ring-1 ring-white/20",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
                      "Serving Jackson, MS & 50 miles around"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-bold tracking-tight text-white", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display block text-5xl italic sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]", children: HEADLINE_WORDS_TOP.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.span,
                      {
                        initial: { opacity: 0, y: 60, rotateX: -40 },
                        animate: { opacity: 1, y: 0, rotateX: 0 },
                        transition: {
                          delay: 0.5 + i * 0.1,
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1]
                        },
                        className: "mr-3 inline-block",
                        style: { perspective: 800 },
                        children: w
                      },
                      w
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]", children: HEADLINE_WORDS_BOTTOM.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.span,
                      {
                        initial: { opacity: 0, y: 60, rotateX: -40 },
                        animate: { opacity: 1, y: 0, rotateX: 0 },
                        transition: {
                          delay: 0.7 + i * 0.1,
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1]
                        },
                        className: "inline-block",
                        style: { perspective: 800 },
                        children: w
                      },
                      w
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 1, duration: 0.7 },
                      className: "mx-auto mt-5 max-w-lg text-base text-white/70 sm:text-lg md:text-xl",
                      children: "Junk Removal & Moving — done right by a real local crew."
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 1.15, duration: 0.6 },
                      className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Link,
                          {
                            to: "/booking",
                            className: "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-4 w-4" }),
                              "Book Online"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "a",
                          {
                            href: BUSINESS.phoneHref,
                            className: "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "h-4 w-4" }),
                              "Call ",
                              BUSINESS.phone
                            ]
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute right-0 bottom-0 z-10 hidden w-[45%] max-w-[520px] translate-y-[18%] translate-x-[5%] lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandedTruck, { className: "h-auto w-full drop-shadow-2xl" }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 flex items-end justify-between gap-4 p-4 md:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { x: -30, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                transition: { delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                className: "hidden max-w-xs rounded-[1.5rem] border border-white/20 bg-white/10 p-4 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:block md:rounded-[2rem] md:p-5",
                style: {
                  background: "linear-gradient(135deg, oklch(1 0 0 / 0.12), oklch(1 0 0 / 0.05))"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Star,
                      {
                        className: "h-3.5 w-3.5 fill-amber-300 text-amber-300"
                      },
                      i
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-white", children: "4.9 Rating" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-white", children: "4+" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-white/55", children: "Years exp." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-white", children: "500+" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-white/55", children: "Jobs done" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/booking",
                      className: "mt-3 inline-flex items-center gap-2 self-start rounded-full bg-white py-2 pl-2 pr-4 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-7 w-7 place-items-center rounded-full bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-3.5 w-3.5 text-white" }) }),
                        "Book Now"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden flex-1 px-6 pb-2 text-center lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/60", children: "Trusted junk removal & moving in Jackson, MS — 3 pros, fair prices, same-day service available." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { y: 30, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                className: "absolute bottom-0 right-0 flex items-center gap-3 rounded-tl-[2rem] bg-background p-4 pl-10 pt-6 shadow-2xl md:gap-4 md:rounded-tl-[3.5rem] md:p-6 md:pl-14 md:pt-8",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "svg",
                    {
                      className: "absolute -top-6 right-0 h-6 w-6 text-background md:-top-8 md:h-8 md:w-8",
                      viewBox: "0 0 32 32",
                      fill: "none",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "path",
                        {
                          d: "M32 32V0C32 17.6731 17.6731 32 0 32H32Z",
                          fill: "currentColor"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "svg",
                    {
                      className: "absolute bottom-0 -left-6 h-6 w-6 text-background md:-left-8 md:h-8 md:w-8",
                      viewBox: "0 0 32 32",
                      fill: "none",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "path",
                        {
                          d: "M0 0H32C14.3269 0 0 14.3269 0 32V0Z",
                          fill: "currentColor"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-full bg-primary-light shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "h-5 w-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold text-foreground md:text-lg", children: "Free Estimate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: BUSINESS.phoneHref,
                        className: "text-sm font-medium text-primary transition-opacity hover:opacity-80",
                        children: "Call Now →"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: BUSINESS.phone })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className: "fixed inset-0 z-[80] bg-foreground/60 backdrop-blur-sm",
            onClick: () => setOpen(false),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { y: -40, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: -40, opacity: 0 },
                transition: { type: "spring", damping: 22, stiffness: 250 },
                onClick: (e) => e.stopPropagation(),
                className: "m-3 rounded-3xl bg-background p-6 shadow-elegant",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg", children: "Menu" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => setOpen(false),
                        className: "grid h-10 w-10 place-items-center rounded-full border border-border",
                        "aria-label": "Close menu",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: n.to,
                      onClick: () => setOpen(false),
                      className: "block rounded-2xl px-4 py-3 text-base font-medium text-foreground/80 transition hover:bg-muted",
                      activeProps: { className: "bg-primary-light text-primary" },
                      children: n.label
                    }
                  ) }, n.to)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: BUSINESS.phoneHref,
                      className: "mt-6 flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "h-4 w-4" }),
                        " Call ",
                        BUSINESS.phone
                      ]
                    }
                  )
                ]
              }
            )
          }
        ) })
      ]
    }
  );
}
const ITEMS = [
  { label: "Junk Removal", icon: Truck },
  { label: "Moving Help", icon: Package },
  { label: "Furniture Removal", icon: Sofa },
  { label: "Debris Hauling", icon: HardHat },
  { label: "Scrap Metal", icon: Recycle },
  { label: "Packing & Loading", icon: Boxes },
  { label: "Estate Cleanouts", icon: House },
  { label: "Storage Moves", icon: Warehouse }
];
function TrustStrip() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-surface py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 text-center md:text-left md:max-w-[13rem]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-wider text-muted-foreground uppercase", children: "Trusted locally" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "500+" }),
        " Jackson residents served"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee gap-10 md:gap-14", children: [...ITEMS, ...ITEMS].map((item, i) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "flex items-center gap-2 text-sm font-medium whitespace-nowrap text-primary transition-opacity hover:opacity-70",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 opacity-60" }),
              item.label
            ]
          },
          i
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent" })
    ] })
  ] }) });
}
function ServicesGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden px-6 py-24 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "Our Services",
          title: "Everything You Need to",
          italic: "Clear, Move & Haul",
          subtitle: "Professional crew, proper equipment, fair prices. Serving Jackson MS and 50 miles around."
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: SERVICES.map((s, i) => {
        const Icon = s.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i * 0.07, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            whileHover: { y: -8 },
            transition: { type: "spring", stiffness: 300, damping: 22 },
            className: "glass-card group relative h-full overflow-hidden rounded-3xl p-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-shimmer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-primary-light transition-colors duration-300 group-hover:bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-primary transition-colors duration-300 group-hover:text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: s.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.short }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/services",
                    className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3",
                    children: [
                      "Learn more ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" })
                    ]
                  }
                )
              ] })
            ]
          }
        ) }, s.slug);
      }) })
    ] })
  ] });
}
function AnimatedCounter({
  to,
  duration = 2e3,
  suffix = "",
  prefix = "",
  className
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    let start = null;
    let raf = 0;
    const step = (ts) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className, children: [
    prefix,
    val.toLocaleString(),
    suffix
  ] });
}
const STATS = [
  { value: 500, suffix: "+", label: "Jobs Completed" },
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "mi", label: "Service Radius" },
  { value: 3, suffix: "", label: "Expert Crew" }
];
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative overflow-hidden py-24",
      style: {
        background: "linear-gradient(135deg, oklch(0.43 0.21 265) 0%, oklch(0.32 0.18 265) 50%, oklch(0.18 0.08 265) 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-white/8 blur-3xl animate-drift" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent-glow/20 blur-3xl animate-drift", style: { animationDelay: "-6s" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-overlay",
            style: {
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-6 md:grid-cols-4", children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-50px" },
            transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            className: "group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10 md:rounded-3xl md:p-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl text-white md:text-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { to: s.value, suffix: s.suffix }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-medium text-white/60 transition-colors group-hover:text-white/80", children: s.label })
            ]
          },
          s.label
        )) }) })
      ]
    }
  );
}
const STEPS = [
  {
    n: "01",
    icon: PhoneCall,
    title: "Call or Book Online",
    desc: "Tell us what you need removed or moved. Free estimate in minutes."
  },
  {
    n: "02",
    icon: CalendarCheck,
    title: "We Show Up On Time",
    desc: "Our crew arrives at your scheduled slot with all the gear."
  },
  {
    n: "03",
    icon: CircleCheckBig,
    title: "Space Cleared, You Relax",
    desc: "We do the lifting, clean up, and haul everything away."
  }
];
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden px-6 py-24 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-primary/4 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-20 left-0 h-[400px] w-[400px] rounded-full bg-accent/4 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "How it works",
          title: "3 Simple Steps to a",
          italic: "Cleaner Space"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16 grid gap-8 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-12 left-[15%] right-[15%] hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scaleX: 0 },
            whileInView: { scaleX: 1 },
            viewport: { once: true },
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            className: "h-px w-full origin-left bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          }
        ) }),
        STEPS.map((s, i) => {
          const Icon = s.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i * 0.12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              whileHover: { y: -4 },
              transition: { type: "spring", stiffness: 400, damping: 25 },
              className: "group relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-sm transition-shadow duration-500 hover:shadow-lg hover:shadow-primary/5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display absolute -top-1 right-5 text-7xl leading-none text-primary/8 transition-colors group-hover:text-primary/12", children: s.n }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-6 text-2xl text-foreground", children: s.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" })
              ]
            }
          ) }, s.n);
        })
      ] })
    ] })
  ] });
}
const FEATURES = [
  ["Same-Day Service Available", "Need it gone today? We'll make it happen."],
  ["Licensed & Insured", "Fully covered so you have zero liability."],
  ["Flat Rate Pricing", "No hidden fees. You know the cost before we start."],
  ["Eco-Friendly Disposal", "We donate, recycle, and properly dispose."],
  ["4 Years Local Experience", "We know Jackson and the surrounding areas."],
  ["3-Man Expert Crew", "More hands = faster job. We work efficiently."]
];
function WhyChooseUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden px-6 py-24 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/4 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/4 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:sticky lg:top-24 lg:h-fit", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollReveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary-light px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase", children: "Why Kingdom Come" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl", children: [
          "Jackson's most",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display italic font-normal text-primary", children: "trusted" }),
          " ",
          "hauling crew."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground", children: "We're not a faceless corporation. We're 3 local guys who show up, work hard, and leave your space spotless." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            className: "mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30",
            children: "Get Free Quote →"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: FEATURES.map(([title, desc], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          whileHover: { x: 4 },
          transition: { type: "spring", stiffness: 400, damping: 25 },
          className: "group flex items-start gap-4 rounded-2xl border border-border/50 bg-surface/50 px-5 py-5 transition-all duration-300 hover:border-primary/20 hover:bg-surface hover:shadow-md hover:shadow-primary/5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg text-foreground transition-colors group-hover:text-primary", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: desc })
            ] })
          ]
        }
      ) }, title)) })
    ] })
  ] });
}
const TESTIMONIALS = [
  {
    name: "Marcus T.",
    city: "Jackson, MS",
    text: "Kingdom Come cleared out my entire garage in under 2 hours. Professional, fast, and left the space spotless. Highly recommend!"
  },
  {
    name: "Patricia W.",
    city: "Ridgeland, MS",
    text: "We used them for our apartment move. The guys were careful with every piece of furniture. No damage, no drama. Worth every dollar."
  },
  {
    name: "James R.",
    city: "Brandon, MS",
    text: "Called on a Monday, they came Tuesday. Cleaned out all the old scrap metal from my shop. Great crew, great price, great service."
  },
  {
    name: "Linda K.",
    city: "Madison, MS",
    text: "Storm cleanup. They handled debris my regular guys wouldn't touch. Same-day service. I'll be calling them again."
  }
];
function Testimonials() {
  const [i, setI] = reactExports.useState(0);
  const t = TESTIMONIALS[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-surface-2 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl", children: [
          "What",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display italic font-normal text-primary", children: "Jackson" }),
          " ",
          "says"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: Array.from({ length: 5 }).map((_, n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Star,
            {
              className: "h-4 w-4 fill-amber-400 text-amber-400"
            },
            n
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "5.0 average rating" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-10 min-h-[280px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.blockquote,
          {
            initial: { opacity: 0, y: 30, scale: 0.98 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: -20, scale: 0.98 },
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            className: "glass-card relative overflow-hidden rounded-[2rem] p-8 md:p-12",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-6 right-8 h-16 w-16 text-primary/5 md:h-24 md:w-24" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "relative font-display text-2xl leading-snug text-foreground md:text-3xl", children: [
                '"',
                t.text,
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-full bg-primary text-base font-bold text-white shadow-lg shadow-primary/20", children: t.name[0] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: t.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.city })
                ] })
              ] })
            ]
          },
          i
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: TESTIMONIALS.map((_, n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setI(n),
              "aria-label": `Show testimonial ${n + 1}`,
              className: `h-2.5 rounded-full transition-all duration-300 ${i === n ? "w-10 bg-primary" : "w-2.5 bg-primary/20 hover:bg-primary/40"}`
            },
            n
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                whileHover: { scale: 1.08 },
                whileTap: { scale: 0.95 },
                onClick: () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
                className: "grid h-11 w-11 place-items-center rounded-full border border-primary/20 bg-surface shadow-sm transition hover:bg-primary hover:text-white hover:shadow-md",
                "aria-label": "Previous",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                whileHover: { scale: 1.08 },
                whileTap: { scale: 0.95 },
                onClick: () => setI((p) => (p + 1) % TESTIMONIALS.length),
                className: "grid h-11 w-11 place-items-center rounded-full border border-primary/20 bg-surface shadow-sm transition hover:bg-primary hover:text-white hover:shadow-md",
                "aria-label": "Next",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
function ServiceArea() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden px-6 py-24 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute top-1/2 left-1/4 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square w-full max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 grid place-items-center", children: [
          [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "animate-ring absolute h-48 w-48 rounded-full border border-primary/30",
              style: { animationDelay: `${i * 1}s` }
            },
            i
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-48 w-48 rounded-full bg-primary/8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-32 w-32 rounded-full bg-primary/15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid h-16 w-16 place-items-center rounded-full bg-primary text-white shadow-glow animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-7 w-7" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-surface/80 px-4 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md ring-1 ring-border", children: "Jackson, MS — HQ" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            align: "left",
            eyebrow: "Service Area",
            title: "We cover",
            italic: "50 miles around Jackson",
            subtitle: "Local to Jackson and growing. If you're within 50 miles of downtown, we can be there."
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 flex flex-wrap gap-2", children: [
          CITIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "li",
            {
              className: "rounded-full bg-primary-light px-3.5 py-1.5 text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-md hover:shadow-primary/20 cursor-default",
              children: c
            },
            c
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-full border border-dashed border-primary/30 px-3.5 py-1.5 text-xs font-semibold text-primary/70", children: "+ 30 more" })
        ] }) })
      ] })
    ] })
  ] });
}
const PHOTOS = [
  "https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7464706/pexels-photo-7464706.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/4246109/pexels-photo-4246109.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/4246202/pexels-photo-4246202.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7464701/pexels-photo-7464701.jpeg?auto=compress&cs=tinysrgb&w=900"
];
function GalleryPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-surface-2 px-6 py-24 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "The crew at work",
          title: "A look at",
          italic: "recent jobs",
          subtitle: "From single-item pickups to full estate cleanouts and moves."
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 columns-2 gap-4 sm:gap-6 md:columns-3", children: PHOTOS.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          whileHover: { scale: 1.02 },
          transition: { type: "spring", stiffness: 300, damping: 22 },
          className: "group relative mb-4 overflow-hidden rounded-2xl sm:mb-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src,
                alt: "Kingdom Come Services crew at work",
                loading: "lazy",
                className: "h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" })
          ]
        }
      ) }, src)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/gallery",
          className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20",
          children: [
            "View full gallery ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })
          ]
        }
      ) })
    ] })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrustStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesGrid, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyChooseUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceArea, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PricingTeaser, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  Home as component
};
