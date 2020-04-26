import { shallowMount, Wrapper } from "@vue/test-utils";
import VueBlobJsonCsv from "@/components/VueBlobJsonCsv.vue";

const mockData = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  }
];

let wrapper: Wrapper<Vue>;
let createElement: any;
let createObjectURL: any;

beforeEach(() => {
  createElement = document.createElement;
  createObjectURL = window.URL.createObjectURL;
  wrapper = shallowMount(VueBlobJsonCsv, {
    propsData: {
      data: mockData,
      fileType: "json"
    }
  });
});

afterEach(() => {
  jest.restoreAllMocks();
  document.createElement = createElement;
  window.URL.createObjectURL = createObjectURL;
  wrapper.destroy();
});

describe("VueBlobJsonCsv.vue", () => {
  describe("Methods", () => {
    test("Call handleDownload", () => {
      const stub = jest.fn();
      wrapper.setMethods({
        handleDownload: stub
      });
      wrapper.find("span").trigger("click");
      expect(stub).toHaveBeenCalled();
    });
  });
  describe("Error", () => {
    test("Props fileType is empty", () => {
      wrapper.setProps({
        title: "Download CSV",
        fileType: ""
      });
      wrapper.find("span").trigger("click");
      expect(wrapper.emitted().error).toBeTruthy();
    });
  });
  describe("handleDownload", () => {
    test("JSON", () => {
      wrapper.setProps({
        tagName: "div",
        title: "Download JSON",
        fileType: "json",
        fileName: "todo"
      });
      const link = { href: "", download: "", click: jest.fn() };
      document.createElement = jest.fn().mockReturnValueOnce(link);
      window.URL.createObjectURL = jest.fn().mockReturnValueOnce(mockData);

      wrapper.find("div").trigger("click");

      expect(wrapper.find("div").exists()).toBe(true);
      expect(wrapper.find("div").text()).toBe("Download JSON");
      expect(window.URL.createObjectURL).toBeCalledWith(
        new Blob([JSON.stringify(mockData)], {
          type: `application/json`
        })
      );
      expect(document.createElement).toBeCalledWith("a");
      expect(link.href).toEqual(mockData);
      expect(link.download).toBe("todo.json");
      expect(link.click).toBeCalledTimes(1);
      expect(wrapper.emitted().success).toBeTruthy();
    });
    test("CSV", () => {
      wrapper.setProps({
        tagName: "div",
        title: "Download CSV",
        fileType: "csv",
        fileName: "todo"
      });
      const link = { href: "", download: "", click: jest.fn() };
      document.createElement = jest.fn().mockReturnValueOnce(link);
      window.URL.createObjectURL = jest.fn().mockReturnValueOnce(mockData);

      wrapper.find("div").trigger("click");

      expect(wrapper.find("div").exists()).toBe(true);
      expect(window.URL.createObjectURL).toBeCalledWith(
        new Blob([JSON.stringify(mockData)], {
          type: `application/csv`
        })
      );
      expect(document.createElement).toBeCalledWith("a");
      expect(link.href).toEqual(mockData);
      expect(link.download).toBe("todo.csv");
      expect(link.click).toBeCalledTimes(1);
      expect(wrapper.emitted().success).toBeTruthy();
    });
  });
  describe("confirm", () => {
    test("Yes", () => {
      wrapper.setProps({
        tagName: "div",
        title: "Download CSV",
        fileType: "csv",
        fileName: "todo",
        confirm: "confirm text"
      });
      const link = { href: "", download: "", click: jest.fn() };
      document.createElement = jest.fn().mockReturnValueOnce(link);
      window.URL.createObjectURL = jest.fn().mockReturnValueOnce(mockData);
      window.confirm = jest.fn().mockImplementation(() => true);

      wrapper.find("div").trigger("click");

      expect(window.URL.createObjectURL).toBeCalledWith(
        new Blob([JSON.stringify(mockData)], {
          type: `application/csv`
        })
      );
      expect(document.createElement).toBeCalledWith("a");
      expect(link.href).toBe(mockData);
      expect(link.download).toBe("todo.csv");
      expect(link.click).toBeCalledTimes(1);
      expect(wrapper.emitted().success).toBeTruthy();
    });
    test("No", () => {
      wrapper.setProps({
        tagName: "div",
        title: "Download CSV",
        fileType: "csv",
        fileName: "todo",
        confirm: "?????"
      });
      const link = { href: "", download: "", click: jest.fn() };
      document.createElement = jest.fn().mockReturnValueOnce(link);
      window.URL.createObjectURL = jest.fn().mockReturnValueOnce(mockData);
      window.confirm = jest.fn().mockImplementation(() => false);

      wrapper.find("div").trigger("click");

      expect(window.URL.createObjectURL).not.toBeCalled();
      expect(document.createElement).not.toBeCalled();
      expect(link.href).toBe("");
      expect(link.download).toBe("");
      expect(link.click).toBeCalledTimes(0);
    });
  });
});
