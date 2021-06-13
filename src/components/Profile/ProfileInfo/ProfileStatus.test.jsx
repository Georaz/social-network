import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status="GR-network" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("GR-network");
    });

    test("After creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="GR-network" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("After creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="GR-network" />);
        const root = component.root;

        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });

    test("After creation <span> should contain a correct status", () => {
        const component = create(<ProfileStatus status="GR-network" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("GR-network");
    });

    test("Input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="GR-network" />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("GR-network");
    });

    test("Callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="GR-network" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});